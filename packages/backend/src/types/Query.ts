import { arg, intArg, queryType, stringArg } from '@nexus/schema'
import { File, SortOrder } from '@prisma/client'
import { subtractDays } from '../modules/Ads'
import { calculateCart } from '../modules/Audit'
import { generateCodeForProduct } from '../modules/OneTimeCodes'
import { discordOauth } from '../server'
import { getUserId } from '../utils'

const Query = queryType({
  definition(t) {
    t.crud.oneTimeCodes({
      filtering: {
        code: true,
      },
    })

    t.crud.withdraws({
      filtering: {
        user: true,
      },
    })

    t.crud.promoCode()
    t.crud.promoCodes({
      filtering: {
        isArchived: true,
        user: true,
      },
    })

    t.crud.files({
      filtering: {
        isArchived: true,
        product: true,
      },
    })

    t.crud.images({
      filtering: {
        isArchived: true,
        productId: true,
      },
    })

    t.crud.product()
    t.crud.products({
      filtering: {
        isArchived: true,
        tags: true,
      },
      ordering: {
        createdAt: true,
        amount: true,
        name: true,
      },
      pagination: true,
    })

    t.crud.user()
    t.crud.tag()
    t.crud.tags({
      pagination: true,
    })

    t.crud.transaction()
    t.crud.transactions({
      ordering: true,
      filtering: {
        buyer: true,
        products: true,
      },
    })

    t.crud.reviews({
      ordering: true,
      filtering: {
        product: true,
        author: true,
      },
    })

    t.int('productCount', {
      args: {
        username: stringArg({ nullable: true }),
      },
      resolve: async (root, { username }, ctx) => {
        if (username) {
          return await ctx.prisma.product.count({
            where: {
              owner: {
                username,
              },
              isArchived: false,
            },
          })
        }

        return await ctx.prisma.product.count({
          where: {
            isArchived: false,
          },
        })
      },
    })

    // TODO: Impl. `first` and `after` on frontend
    t.field('mySales', {
      type: 'Payout',
      list: [true],
      args: {
        first: intArg(),
        after: arg({ type: 'TransactionWhereUniqueInput' }),
      },
      resolve: async (root, { first, after }, ctx) => {
        const userId = getUserId(ctx)

        if (!userId) {
          throw new Error('You must be signed in')
        }

        const payouts = await ctx.prisma.payout.findMany({
          ...(after && {
            cursor: after,
          }),
          take: first ?? 20,
          where: {
            forPlatform: false,
            product: {
              ownerId: userId,
            },
          },
          orderBy: {
            createdAt: SortOrder.desc,
          },
        })

        return payouts
      },
    })

    t.string('getFileURLs', {
      args: {
        licenseKey: stringArg({ nullable: false }),
      },
      resolve: async (root, { licenseKey }, ctx) => {
        const fileObjs: Pick<File, 'name' | 'url'>[] = []

        // TODO: This could probably be optimized. I'm tired of working on it for now.
        // TODO: The issue is that I can't query deep relationships...I think
        const transaction = await ctx.prisma.transaction.findOne({
          where: {
            licenseKey,
          },
          include: {
            products: true,
          },
        })

        // get all products from the transaction (license key)
        const productIds = transaction?.products.map((product) => product.id)

        const fileObjectsRequest = productIds?.map(async (productId) => {
          const product = await ctx.prisma.product.findOne({
            where: {
              id: productId,
            },
            include: {
              file: true,
            },
          })

          // generate a one time code for each product
          const code = await generateCodeForProduct(productId)

          if (product?.file && code) {
            fileObjs.push({
              name: product.file.name,
              url:
                process.env.NODE_ENV === 'production'
                  ? `https://wavr.me/download/${code}`
                  : `http://localhost:3000/download/${code}`,
            })
          }
        })

        if (fileObjectsRequest?.length) {
          return Promise.all(fileObjectsRequest).then(() => {
            if (transaction) {
              return JSON.stringify({
                urls: fileObjs,
              })
            }

            return '{}'
          })
        } else {
          throw new Error('No files found')
        }
      },
    })

    // TODO: Re-add this when the time is right
    // t.field('featuredProducts', {
    //   type: 'Product',
    //   list: [true],
    //   args: {
    //     first: intArg({ nullable: true }),
    //     after: arg({ type: 'ProductWhereUniqueInput', nullable: true }),
    //   },
    //   resolve: async (root, { first, after, where }, ctx) => {
    //     const products = await ctx.prisma.product.findMany({
    //       take: first ?? 16,
    //       ...(after?.id && {
    //         cursor: {
    //           id: after?.id,
    //         },
    //       }),
    //       where: {
    //         isArchived: {
    //           equals: false,
    //         },
    //       },
    //     })

    //     return products
    //   },
    // })

    t.field('me', {
      type: 'User',
      nullable: true,
      resolve: async (root, args, ctx) => {
        const userId = getUserId(ctx)

        if (userId) {
          const user = await ctx.prisma.user.findOne({
            where: {
              id: userId,
            },
          })

          return user
        } else {
          return null
        }
      },
    })

    /**
     * One resolver as our source of truth for costs.
     * This is to calc costs on the frontend, and verify costs on the backend
     */
    t.string('calculateCart', {
      // we could just return the products, but I want to add "promoEffect" object
      // we're sending the response as a JSON string
      args: {
        promoCode: stringArg({ nullable: true }),
        productIds: stringArg({
          list: [true],
          nullable: false,
        }),
      },
      resolve: async (root, { promoCode, productIds }, ctx, info) => {
        const res = JSON.stringify(
          await calculateCart(productIds, promoCode ?? '')
        )

        return res
      },
    })

    t.string('getDiscordOauthUrl', {
      resolve: (root, args, ctx) => {
        const userToken = ctx.request
          .get('Authorization')
          .replace('Bearer ', '')

        const redirectUri =
          process.env.NODE_ENV === 'production'
            ? 'https://api.wavr.me:4000/discord-oauth'
            : 'http://localhost:4000/discord-oauth'

        return discordOauth.generateAuthUrl({
          responseType: 'code',
          state: Buffer.from(userToken).toString('base64'),
          scope: ['identify'],
          redirectUri,
        })
      },
    })

    t.field('getRandomAd', {
      type: 'Ad',
      nullable: true,
      resolve: async (root, args, ctx) => {
        const now = new Date()

        const runningAds = await ctx.prisma.ad.findMany({
          where: {
            expiresAt: {
              gte: now,
            },
          },
        })

        const randomIdx = Math.floor(Math.random() * runningAds.length)

        return runningAds[randomIdx]
      },
    })
  },
})

export default Query
