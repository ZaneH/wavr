import { objectType } from '@nexus/schema'
import { totalStorageForUser } from '../modules/FileAPI'
import { totalProducts } from '../modules/Products'
import { getMaxProductSpace, getMaxStorage } from '../modules/User'
import { getUserId } from '../utils'

const User = objectType({
  name: 'User',
  definition(t) {
    t.model.id()
    t.model.discordId({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect discord id
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          return null
        }
      },
    })

    t.model.isVerified()
    t.model.accountType()
    t.model.adTokens({
      resolve: async (root, args, ctx, info, originalResolve) => {
        // protect # of ad tokens
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.avatarURL()
    t.model.createdAt()
    t.model.displayName()
    t.model.favorites({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect favorites
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.email({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect email addresses
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.emailOnSale({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect email addresses
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.emailUpdates({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect email settings
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.emailVerified({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect email settings
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.paidBalance({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect paid balance
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.paypalEmail({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect paypalEmails
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.products({
      pagination: true,
      filtering: {
        isArchived: true,
      },
      ordering: {
        createdAt: true,
        name: true,
        amount: true,
      },
    })

    t.model.transactions({ pagination: true })
    t.model.unpaidBalance({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect unpaid balance
        const userId = getUserId(ctx)

        if (userId === root.id) {
          return originalResolve(root, args, ctx, info)
        } else {
          throw new Error('Not Authorised!')
        }
      },
    })

    t.model.username()

    t.int('storageQuotaPercent', {
      resolve: async (root, args, ctx) => {
        // protect just 'cause
        const userId = getUserId(ctx)

        if (root.id !== userId) {
          return 0
        }

        const userBytes = await totalStorageForUser({ id: root.id })

        const maxStorageInBytes = getMaxStorage({
          accountType: root.accountType,
        })

        const percentage = Math.ceil((userBytes / maxStorageInBytes) * 100)
        return percentage
      },
    })

    t.int('productQuotaPercent', {
      resolve: async (root, args, ctx) => {
        // protect just 'cause
        const userId = getUserId(ctx)

        if (root.id !== userId) {
          return 0
        }

        const maxProducts = getMaxProductSpace({
          accountType: root.accountType,
        })

        const productCount = await totalProducts({ id: root.id })

        const percentage = Math.ceil((productCount / maxProducts) * 100)
        return percentage
      },
    })
  },
})

export default User
