import { objectType } from '@nexus/schema'

const Transaction = objectType({
  name: 'Transaction',
  definition(t) {
    t.model.id()
    t.model.amount()
    t.model.buyer()
    t.model.createdAt()
    t.model.products()
    t.model.licenseKeyShown()
    t.model.licenseRedeemed()
    t.model.licenseKey({
      resolve: async (root, args, ctx, info, originalResolve) => {
        if (root.licenseKeyShown >= 1 && !root.licenseRedeemed) {
          return ''
        }

        const licenseKey = await originalResolve(root, args, ctx, info)

        await ctx.prisma.transaction.update({
          data: {
            licenseKeyShown: root.licenseKeyShown + 1,
          },
          where: {
            id: root.id,
          },
        })

        return licenseKey
      },
    })
  },
})

export default Transaction
