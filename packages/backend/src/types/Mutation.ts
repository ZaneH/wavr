import { mutationType, stringArg } from '@nexus/schema'
import * as bcrypt from 'bcryptjs'
import cuid from 'cuid'
import { sign } from 'jsonwebtoken'
import sanitizeHtml from 'sanitize-html'
import { addDays, isAdActive } from '../modules/Ads'
import { generateCodeForProduct } from '../modules/OneTimeCodes'
import { getPayPalOrder, isValidPayment, paySellers } from '../modules/PayPal'
import { spendPromoCode } from '../modules/PromoCodes'
import {
  sendRequestWithdrawEmail,
  sendResetPasswordEmail,
  sendTransactionEmail,
  sendWelcomeEmail,
  sendWithdrawVerifiedEmail,
} from '../modules/SendGrid'
import { getMaxProductSpace } from '../modules/User'
import { APP_SECRET, getUserId } from '../utils'

const Mutation = mutationType({
  definition(t) {
    t.crud.createOneReport({
      computedInputs: {
        reporter: ({ args, ctx, info }) => {
          return { connect: { id: getUserId(ctx) } }
        },
      },
    })

    t.crud.updateOneUser()
    t.crud.createOneProduct({
      computedInputs: {
        owner: ({ args, ctx, info }) => {
          return { connect: { id: getUserId(ctx) } }
        },
      },
      resolve: async (root, args, ctx, info, originalResolve) => {
        const userId = getUserId(ctx)

        // check if the user has enough product space
        const user = await ctx.prisma.user.findOne({
          where: {
            id: userId,
          },
          include: {
            products: true,
          },
        })

        const maxProducts = getMaxProductSpace({
          accountType: user?.accountType ?? 'FREE',
        })

        if (user?.products?.length + 1 > maxProducts) {
          throw new Error('Not enough product storage')
        } else {
          return originalResolve(root, args, ctx, info)
        }
      },
    })

    t.crud.updateOneProduct({
      resolve: async (root, args, ctx, info, originalResolve) => {
        if (
          (Number(args?.data?.amount?.set) < 1.49 &&
            Number(args?.data?.amount?.set) !== 0) ||
          (args?.data?.onSale?.set && Number(args?.data?.salePrice?.set) < 1.49)
        ) {
          throw new Error('Tried to enter an amount less than $1.49')
        }

        const product = await originalResolve(root, args, ctx, info)

        const dirtyDescription = product?.description ?? ''
        const cleanDescription = sanitizeHtml(dirtyDescription, {
          allowedIframeHostnames: [
            'www.youtube.com',
            'www.soundcloud.com',
            'player.vimeo.com',
          ],
          allowedIframeDomains: ['youtube.com', 'soundcloud.com', 'vimeo.com'],
          allowedTags: [
            'a',
            'b',
            'i',
            'h1',
            'h2',
            'h3',
            'h4',
            'h5',
            'h6',
            'em',
            'strong',
            'img',
            'iframe',
            'div',
            'ul',
            'ol',
            'li',
            'pre',
            'strike',
            'br',
            'hr',
            'code',
            'p',
            'center',
          ],
          disallowedTagsMode: 'escape',
          selfClosing: ['img', 'br', 'hr'],
          allowedAttributes: {
            '*': ['href', 'align', 'alt', 'bgcolor', 'style'],
            a: ['target'],
            iframe: ['*'],
            img: ['src'],
          },
          allowedSchemes: ['data', 'http', 'https'],
          enforceHtmlBoundary: true,
          parser: {
            lowerCaseTags: true,
          },
        })

        return await ctx.prisma.product.update({
          where: {
            id: product?.id,
          },
          data: {
            description: cleanDescription,
          },
        })
      },
    })

    t.crud.createOneTransaction({
      resolve: async (root, args, ctx, info, originalResolve) => {
        const transactionData = args.data
        args.data.licenseKey = cuid()

        const order = await getPayPalOrder(transactionData.paypalPaymentId!)

        return await isValidPayment(
          order,
          args.data.products as any,
          args.data.promos?.connect?.[0].code ?? ''
        )
          .then(async (valid) => {
            if (valid) {
              const approvedTransaction = await originalResolve(
                root,
                {
                  ...args,
                  data: {
                    ...args.data,
                    approved: true,
                    email:
                      args.data?.email ?? order?.result?.payer?.email_address,
                  },
                },
                ctx,
                info
              )

              const promoCodes = args.data?.promos?.connect?.map((code) => code)

              // use promo codes (1 for now)
              if (promoCodes?.[0]) {
                spendPromoCode(promoCodes?.[0]?.code)
              }

              if (approvedTransaction?.email) {
                // prepare one time links for transaction email
                const transactionProductLinks = args?.data?.products!.connect?.map(
                  async (product) => {
                    const otc = await generateCodeForProduct(product?.id)

                    const fullProduct = await ctx.prisma.product.findOne({
                      where: {
                        id: product?.id,
                      },
                    })

                    return {
                      name:
                        fullProduct?.name === ''
                          ? '(no name)'
                          : fullProduct?.name,
                      url:
                        process.env.NODE_ENV === 'production'
                          ? `https://wavr.me/download/${otc}`
                          : `http://localhost:3000/download/${otc}`,
                      code: otc,
                    }
                  }
                )

                Promise.all(transactionProductLinks).then((links) => {
                  const filteredLinks = links.filter((link: any) => link.code)

                  // send transaction email
                  sendTransactionEmail({
                    to: approvedTransaction?.email!,
                    dynamicTemplateData: {
                      transaction_id: approvedTransaction?.id!,
                      transaction_amount: approvedTransaction?.amount!?.toFixed(
                        2
                      ),
                      license_key: approvedTransaction?.licenseKey!,
                      products: filteredLinks,
                    },
                  })
                })
              }

              // if there was an actual order placed, payout
              if (order?.result) {
                const items = order.result.purchase_units?.[0].items

                // create a { productId, amount } object
                const payouts =
                  args.data.products?.connect?.map((product) => {
                    const selectedItem = items.find(
                      (item: any) => item.sku === product.id
                    )

                    return {
                      productId: product.id!,
                      amount: selectedItem?.unit_amount?.value,
                      transactionId: approvedTransaction?.id,
                    }
                  }) ?? []

                // pay sellers
                paySellers(
                  {
                    payouts,
                  },
                  order
                )
              }

              return approvedTransaction
            } else {
              throw new Error('Invalid transaction')
            }
          })
          .catch((err) => {
            console.error(err)
            throw new Error(err)
          })
      },
    })

    t.crud.createOneReview({
      computedInputs: {
        author: ({ args, ctx, info }) => {
          return { connect: { id: getUserId(ctx) } }
        },
      },
      resolve: async (root, args, ctx, info, originalResolve) => {
        const userId = getUserId(ctx)
        const productId = args?.data?.product?.connect?.id

        const existingReviews = await ctx.prisma.review.findMany({
          where: {
            author: {
              id: {
                equals: userId?.toString(),
              },
            },
            product: {
              id: {
                equals: productId?.toString(),
              },
            },
          },
        })

        if (args?.data?.stars > 5) {
          throw new Error('Cannot rate higher than a 5')
        }

        if (args?.data?.product?.create) {
          throw new Error("Didn't expect a `create`")
        }

        if (existingReviews.length > 0) {
          throw new Error("You've already reviewed this product!")
        } else {
          return originalResolve(root, args, ctx, info)
        }
      },
    })

    t.crud.createOnePromoCode({
      computedInputs: {
        user: ({ args, ctx, info }) => {
          return { connect: { id: getUserId(ctx) } }
        },
        transactions: ({ args, ctx, info }) => [],
      },
    })

    t.crud.deleteOnePromoCode()

    t.field('redeemKey', {
      type: 'Transaction',
      args: {
        key: stringArg({ nullable: false }),
      },
      resolve: async (root, { key }, ctx) => {
        const userId = getUserId(ctx)

        if (!userId) {
          throw new Error('You must be signed in to activate a key')
        }

        const keyTransaction = await ctx.prisma.transaction.findOne({
          where: {
            licenseKey: key,
          },
        })

        if (!keyTransaction) {
          throw new Error('The provided key is invalid')
        }

        if (keyTransaction.licenseRedeemed) {
          throw new Error('This key has already been redeemed')
        }

        // if we reach this point, the key hasn't been used, and the user is signed in
        return await ctx.prisma.transaction.update({
          where: {
            id: keyTransaction.id,
          },
          data: {
            licenseRedeemed: true,
            buyer: {
              connect: {
                id: userId,
              },
            },
          },
        })
      },
    })

    t.field('changePassword', {
      type: 'User',
      args: {
        oldPassword: stringArg({ nullable: false }),
        newPassword: stringArg({ nullable: false }),
        confirmNewPassword: stringArg({ nullable: false }),
      },
      resolve: async (
        root,
        { oldPassword, newPassword, confirmNewPassword },
        ctx
      ) => {
        // verify the new passwords match
        if (newPassword !== confirmNewPassword) {
          throw new Error('Both passwords must match')
        }

        // verify that the old password is correct
        const userId = getUserId(ctx)
        const user = await ctx.prisma.user.findOne({
          where: {
            id: userId,
          },
        })

        const match = await bcrypt.compare(oldPassword, user?.password!)
        if (!match) {
          throw new Error('The current password is incorrect')
        }

        const newPasswordHash = await bcrypt.hash(newPassword, 10)

        // change password
        ctx.prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            password: newPasswordHash,
          },
        })

        return user
      },
    })

    t.field('login', {
      type: 'AuthPayload',
      args: {
        email: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
      },
      resolve: async (root, { email, password }, ctx) => {
        // check if the user exists
        const user = await ctx.prisma.user.findOne({
          where: {
            email,
          },
        })

        if (!user) {
          throw new Error(`The email or password is incorrect`)
        }

        // check if the password is correct
        const passwordValid = await bcrypt.compare(password, user.password)

        if (!passwordValid) {
          throw new Error(`The email or password is incorrect`)
        }

        return {
          token: sign({ userId: user?.id }, APP_SECRET, { expiresIn: '7d' }),
          user,
        }
      },
    })

    t.field('signup', {
      type: 'AuthPayload',
      args: {
        email: stringArg({ nullable: false }),
        username: stringArg({ nullable: false }),
        password: stringArg({ nullable: false }),
        confirmPassword: stringArg({ nullable: false }),
      },
      resolve: async (
        root,
        { email, username, password, confirmPassword },
        ctx
      ) => {
        const hashedPassword = await bcrypt.hash(password, 10)

        // verify that the passwords match
        if (password !== confirmPassword) {
          throw new Error('Password and confirm password do not match')
        }

        // some constraints
        if (email.trim().length === 0) {
          throw new Error('Email is missing')
        } else if (password.length < 5) {
          throw new Error('Password must be at least 5 characters')
        } else if (username.trim().length === 0) {
          throw new Error('Username is missing')
        }

        const user = await ctx.prisma.user.create({
          data: {
            email,
            username,
            password: hashedPassword,
          },
        })

        if (!!user) {
          // send welcome email
          sendWelcomeEmail({
            to: user.email,
            dynamicTemplateData: {
              username: user.username,
              verify_url:
                process.env.NODE_ENV === 'production'
                  ? `https://wavr.me/verify/${user.emailVerifyToken}`
                  : `http://localhost:3000/verify/${user.emailVerifyToken}`,
            },
          })
        }

        return {
          token: sign({ userId: user?.id }, APP_SECRET, { expiresIn: '7d' }),
          user,
        }
      },
    })

    t.boolean('changePasswordWithToken', {
      args: {
        token: stringArg({ nullable: false }),
        newPassword: stringArg({ nullable: false }),
        confirmPassword: stringArg({ nullable: false }),
      },
      resolve: async (root, args, ctx) => {
        if (args.newPassword !== args.confirmPassword) {
          throw new Error("Passwords don't match")
        }

        const foundUser = await ctx.prisma.user.update({
          where: {
            passwordResetToken: args.token,
          },
          data: {
            password: bcrypt.hashSync(args.newPassword, 10),
            passwordResetToken: cuid(),
          },
        })

        return !!foundUser
      },
    })

    t.boolean('resetPassword', {
      args: {
        email: stringArg({ nullable: false }),
      },
      resolve: async (root, args, ctx) => {
        const passwordResetToken = cuid()

        const foundUser = await ctx.prisma.user.update({
          where: {
            email: args.email,
          },
          data: {
            passwordResetToken,
          },
        })

        sendResetPasswordEmail({
          to: foundUser?.email,
          dynamicTemplateData: {
            reset_url:
              process.env.NODE_ENV === 'production'
                ? `https://wavr.me/reset-password/${passwordResetToken}`
                : `http://localhost:3000/reset-password/${passwordResetToken}`,
          },
        })
      },
    })

    t.boolean('verifyEmail', {
      args: {
        token: stringArg({ nullable: false }),
      },
      resolve: async (root, args, ctx) => {
        const foundUser = await ctx.prisma.user.update({
          where: {
            emailVerifyToken: args.token,
          },
          data: {
            emailVerified: true,
            emailVerifyToken: cuid(),
          },
        })

        return !!foundUser
      },
    })

    t.boolean('resendVerificationEmail', {
      args: {
        email: stringArg({ nullable: false }),
      },
      resolve: async (root, args, ctx) => {
        const newEmailVerifyToken = cuid()

        const foundUser = await ctx.prisma.user.update({
          where: {
            email: args.email,
          },
          data: {
            emailVerifyToken: newEmailVerifyToken,
          },
        })

        sendWelcomeEmail({
          to: foundUser.email,
          dynamicTemplateData: {
            username: foundUser.username,
            verify_url:
              process.env.NODE_ENV === 'production'
                ? `https://wavr.me/verify/${newEmailVerifyToken}`
                : `http://localhost:3000/verify/${newEmailVerifyToken}`,
          },
        })

        // why not
        return true
      },
    })

    t.boolean('requestWithdraw', {
      args: {
        id: stringArg({ nullable: false }),
      },
      resolve: async (root, args, ctx, info) => {
        const user = await ctx.prisma.user.findOne({
          where: {
            id: args.id,
          },
        })

        const withdrawRequest = await ctx.prisma.withdraw.create({
          data: {
            user: {
              connect: {
                id: user?.id,
              },
            },
            confirmToken: cuid(),
            approved: false,
          },
        })

        sendRequestWithdrawEmail({
          to: user?.email!,
          dynamicTemplateData: {
            username: user?.username,
            confirm_request:
              process.env.NODE_ENV === 'production'
                ? `https://wavr.me/confirm-withdraw/${withdrawRequest.confirmToken}`
                : `http://localhost:3000/confirm-withdraw/${withdrawRequest.confirmToken}`,
            change_password:
              process.env.NODE_ENV === 'production'
                ? `https://wavr.me/settings`
                : `http://localhost:3000/settings`,
          },
        })

        return !!user
      },
    })

    t.boolean('verifyWithdraw', {
      args: {
        token: stringArg({ nullable: false }),
      },
      resolve: async (root, args, ctx, info) => {
        const withdraw = await ctx.prisma.withdraw.findMany({
          where: {
            confirmToken: {
              equals: args.token,
            },
          },
        })

        const updatedWithdraw = await ctx.prisma.withdraw.update({
          where: {
            id: withdraw?.[0]?.id,
          },
          data: {
            approved: true,
          },
          select: {
            user: true,
          },
        })

        sendWithdrawVerifiedEmail({
          to: updatedWithdraw.user?.email,
          dynamicTemplateData: {
            username: updatedWithdraw.user?.username,
            paypal_email: updatedWithdraw.user?.paypalEmail,
            account_settings:
              process.env.NODE_ENV === 'production'
                ? `https://wavr.me/settings`
                : `http://localhost:3000/settings`,
          },
        })

        return !!updatedWithdraw
      },
    })

    t.field('startAd', {
      type: 'Ad',
      args: {
        productId: stringArg({ required: true }),
      },
      nullable: true,
      resolve: async (root, { productId }, ctx) => {
        const userId = getUserId(ctx)
        const product = await ctx.prisma.product.findOne({
          where: {
            id: productId,
          },
          select: {
            owner: true,
          },
        })

        if (product?.owner?.id !== userId) {
          throw new Error('Not Authorised!')
        }

        // check if the ad is already running
        const adIsActive = await isAdActive(productId)
        if (adIsActive) {
          throw new Error('Ad is already active')
        }

        // spend their ad token
        const user = await ctx.prisma.user.findOne({
          where: {
            id: userId,
          },
        })

        await ctx.prisma.user.update({
          where: {
            id: userId,
          },
          data: {
            adTokens: user!.adTokens - 1,
          },
        })

        const ad = await ctx.prisma.ad.create({
          data: {
            expiresAt: addDays(new Date(), 10),
            product: {
              connect: {
                id: productId,
              },
            },
          },
        })

        return ad
      },
    })

    t.boolean('toggleFavorite', {
      description: 'Returns true if the Favorite was added, false if removed',
      args: {
        productId: stringArg({ required: true }),
      },
      resolve: async (root, { productId }, ctx) => {
        const userId = getUserId(ctx)

        // get the current user favorites (as an array)
        const favoritesArray = (
          await ctx.prisma.user.findOne({
            where: {
              id: userId,
            },
            select: {
              favorites: true,
            },
          })
        )?.favorites

        // find index if it is already in favorites
        const favoriteIndex =
          favoritesArray?.findIndex((product) => product?.id === productId) ??
          -1

        // if the favorite was found, remove it
        if (favoriteIndex >= 0) {
          favoritesArray?.splice(favoriteIndex)

          await ctx.prisma.user.update({
            where: {
              id: userId,
            },
            data: {
              favorites: {
                set: favoritesArray?.map((product) => {
                  return { id: product?.id }
                }),
              },
            },
          })

          return false
        } else {
          // if the favorite wasn't found, add it
          const setArg = favoritesArray?.map((product) => {
            return { id: product?.id }
          })

          setArg?.push({ id: productId })

          await ctx.prisma.user.update({
            where: {
              id: userId,
            },
            data: {
              favorites: {
                set: setArg,
              },
            },
          })

          return true
        }
      },
    })
  },
})

export default Mutation
