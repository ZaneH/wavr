import { allow, and, rule, shield } from 'graphql-shield'
import { ownsProduct } from '../modules/Products'
import { getUserId } from '../utils'

const rules = {
  isAuthenticatedUser: rule()((parent, args, ctx) => {
    const userId = getUserId(ctx)
    return Boolean(userId)
  }),
  isTheUser: rule()((parent, args, ctx) => {
    const userId = getUserId(ctx)
    return (
      userId === args?.where?.id ||
      userId === args?.where?.user?.id?.equals ||
      userId === args?.where?.buyer?.id?.equals
    )
  }),
  createdTheProduct: rule()(async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    const productId =
      args?.where?.id ??
      args?.data?.product?.connect?.id ??
      args?.where?.product?.id?.equals ??
      ''

    const product = await ctx.prisma.product.findOne({
      where: {
        id: productId,
      },
      select: {
        owner: true,
      },
    })

    if (args?.data?.affectsAll && !args?.data?.product) {
      return true
    }

    return product?.owner?.id === userId
  }),
  boughtTheProduct: rule()(async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    const productId = args?.data?.product?.connect?.id

    return await ownsProduct(userId, productId)
  }),
  createdThePromoCode: rule()(async (parent, args, ctx) => {
    const userId = getUserId(ctx)
    const promoCodeId = args?.where?.id

    const promoCode = await ctx.prisma.promoCode.findOne({
      where: {
        id: promoCodeId,
      },
      select: {
        user: true,
      },
    })

    return promoCode?.user?.id === userId
  }),
}

export const permissions = shield(
  {
    Query: {
      files: rules.createdTheProduct,
      images: allow,
      product: allow,
      products: allow,
      user: allow,
      tag: allow,
      tags: allow,
      transaction: allow,
      transactions: rules.isTheUser,
      reviews: allow,
      productCount: allow,
      mySales: rules.isAuthenticatedUser,
      getFileURLs: allow,
      calculateCart: allow,
      featuredProducts: allow,
      me: rules.isAuthenticatedUser,
      promoCodes: rules.isTheUser,
      promoCode: allow,
      withdraws: rules.isTheUser,
      getDiscordOauthUrl: rules.isAuthenticatedUser,
    },
    Mutation: {
      updateOneUser: and(rules.isAuthenticatedUser, rules.isTheUser),
      createOneReport: rules.isAuthenticatedUser,
      createOneProduct: rules.isAuthenticatedUser,
      updateOneProduct: rules.createdTheProduct,
      createOneTransaction: allow,
      createOneReview: and(rules.isAuthenticatedUser, rules.boughtTheProduct),
      createOnePromoCode: and(
        rules.isAuthenticatedUser,
        rules.createdTheProduct
      ),
      deleteOnePromoCode: and(
        rules.isAuthenticatedUser,
        rules.createdThePromoCode
      ),
      redeemKey: rules.isAuthenticatedUser,
      changePassword: rules.isAuthenticatedUser,
      login: allow,
      signup: allow,
      changePasswordWithToken: allow,
      resetPassword: allow,
      verifyEmail: allow,
      resendVerificationEmail: rules.isAuthenticatedUser,
      requestWithdraw: rules.isAuthenticatedUser,
      verifyWithdraw: rules.isAuthenticatedUser,
      startAd: rules.isAuthenticatedUser,
    },
  },
  {
    fallbackRule: allow,
  }
)
