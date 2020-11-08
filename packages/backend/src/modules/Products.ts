import { prismaClient } from '../context'

interface ITotalProducts {
  id: string
}

export const totalProducts = (args: ITotalProducts) => {
  return prismaClient.product.count({
    where: {
      ownerId: args.id,
      isArchived: false,
    },
  })
}

/**
 * Tests if a user has purchased this product in the past
 * @param userId User ID to test
 * @param productId Product ID to test if userId owns
 */
export async function ownsProduct(
  userId: string | undefined,
  productId: string
) {
  if (!userId) {
    return false
  }

  const user = await prismaClient.user.findOne({
    where: {
      id: userId?.toString(),
    },
    include: {
      transactions: {
        include: {
          products: true,
        },
      },
    },
  })

  if (user?.transactions?.length) {
    // go through each transaction for the user
    // go through all the products
    // see if any match the productId arg
    for (let i = 0; i < user?.transactions.length!; i++) {
      for (let k = 0; k < user?.transactions[i].products.length!; k++) {
        if (user?.transactions[i].products[k].id === productId) {
          return true
        }
      }
    }
  }

  return false
}

/**
 * Tests if the user has added the product to their favorites
 */
export async function userHasFavorited(userId: string, productId: string) {
  const user = await prismaClient.user.findOne({
    where: {
      id: userId,
    },
    select: {
      favorites: true,
    },
  })

  let foundProduct = false
  user?.favorites?.find((product) => {
    if (product?.id === productId) {
      foundProduct = true
    }
  })

  return foundProduct
}
