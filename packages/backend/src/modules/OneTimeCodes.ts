import cuid from 'cuid'
import { prismaClient } from '../context'

/**
 * This masks files with a One Time Code. A code is returned.
 * @param productId The Product to download
 */
export const generateCodeForProduct = async (productId: string) => {
  // get the file associated with the product
  const product = await prismaClient.product.findOne({
    where: {
      id: productId,
    },
    select: {
      file: true,
    },
  })

  // generate a one time code
  if (product?.file?.id) {
    const otc = await prismaClient.oneTimeCode.create({
      data: {
        code: cuid(),
        file: {
          connect: {
            id: product?.file?.id,
          },
        },
      },
    })

    return otc.code
  }

  return undefined
}
