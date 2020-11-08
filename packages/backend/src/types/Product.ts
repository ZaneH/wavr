import { objectType } from '@nexus/schema'
import { ownsProduct, userHasFavorited } from '../modules/Products'
import { getUserId } from '../utils'

const Product = objectType({
  name: 'Product',
  definition(t) {
    t.model.id()
    t.model.amount()
    t.model.createdAt()
    t.model.description()
    t.model.name()
    t.model.onSale()
    t.model.salePrice()
    t.model.owner()
    t.model.tags()
    t.model.reviews({ pagination: true })
    t.model.updatedAt()
    t.model.transactions({
      resolve: (root, args, ctx, info, originalResolve) => {
        // protect transactions
        const userId = getUserId(ctx)

        if (userId === root.ownerId) {
          return originalResolve(root, args, ctx, info)
        } else {
          return []
        }
      },
    })

    t.boolean('isFavorite', {
      resolve: async (root, args, ctx) => {
        // get the user
        const userId = getUserId(ctx)

        if (userId) {
          return await userHasFavorited(userId, root.id)
        } else {
          return false
        }
      },
    })

    t.boolean('ownsProduct', {
      description: 'Returns true if a user has bought the specified product',
      resolve: async (root, args, ctx) => {
        const userId = getUserId(ctx)
        return await ownsProduct(userId, root.id)
      },
    })

    t.string('filename', {
      resolve: async (root, args, ctx) => {
        const fileId = root.id

        const product = await ctx.prisma.product.findOne({
          where: {
            id: fileId,
          },
          select: {
            file: true,
          },
        })

        return product?.file?.name ?? '(none)'
      },
    })

    t.boolean('hasReviewed', {
      resolve: async (root, args, ctx) => {
        const userId = getUserId(ctx)

        const foundReview = await ctx.prisma.review.findMany({
          where: {
            authorId: userId,
            productId: root.id,
            isArchived: false,
          },
        })

        return !!foundReview?.length
      },
    })

    t.float('stars', {
      resolve: async (root, args, ctx) => {
        const avgStars = await ctx.prisma.review.aggregate({
          avg: {
            stars: true,
          },
          where: {
            product: {
              id: root.id,
            },
          },
        })

        return avgStars?.avg?.stars ?? -1
      },
    })

    // fetch images for product
    t.string('images', {
      list: [true],
      resolve: async (root, args, ctx) => {
        const images = await ctx.prisma.image.findMany({
          where: {
            product: {
              id: {
                equals: root.id,
              },
            },
          },
          select: {
            url: true,
          },
        })

        // just return the urls
        return images.map((image) => image.url)
      },
    })
  },
})

export default Product
