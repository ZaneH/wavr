import { Product } from '@prisma/client'
import { prismaClient } from '../context'
import { isCodeExpired } from './PromoCodes'

interface IPromoCodeEffect {
  hadEffect: boolean
  code: string
}

interface ITruthCart {
  beforeTotal: number
  afterTotal: number
  effect: IPromoCodeEffect
  products: Partial<Product>[]
}

export const calculateCart = async (
  productIds: string[],
  promoCode?: string
): Promise<ITruthCart> => {
  // verify the given products against these
  const trueProducts = await prismaClient.product.findMany({
    where: {
      OR: productIds.map((productId: string) => {
        return {
          id: {
            equals: productId,
          },
        }
      }),
    },
  })

  let beforeTotal = 0
  let afterTotal = 0

  beforeTotal = trueProducts.reduce((sum: number, p: Partial<Product>) => {
    if (p?.onSale) {
      return sum + p?.salePrice!
    } else {
      return sum + p?.amount!
    }
  }, 0)

  // this will be returned to the req
  const processedCart = []

  // keep track of any effect the promo code has
  let promoEffect: IPromoCodeEffect = {
    hadEffect: false,
    code: promoCode ?? '',
  }

  // don't bother if there is no promo code, just return the true products
  if (!promoCode) {
    promoEffect = {
      hadEffect: false,
      code: '',
    }

    return {
      products: trueProducts,
      effect: promoEffect,
      beforeTotal,
      afterTotal: beforeTotal,
    }
  }

  // grab the promo code object
  const truePromoCode = await prismaClient.promoCode.findOne({
    where: {
      code: promoCode,
    },
  })

  // check if the promo code applies
  for (let i = 0; i < trueProducts.length; i++) {
    const trueProduct = trueProducts[i]

    // apply the code if the productId matches (and affectsAll is off),
    // or if the code has 'affectsAll' and the owner of the product is the owner of the code
    if (
      (!truePromoCode?.affectsAll &&
        trueProduct.id === truePromoCode?.productId) ||
      (truePromoCode?.affectsAll &&
        trueProduct.ownerId === truePromoCode?.userId)
    ) {
      // determine if promo code is valid
      const isExpired = await isCodeExpired(promoCode)

      if (!isExpired) {
        // determine baseline price
        let productPrice = 0
        if (trueProduct.onSale) {
          productPrice = trueProduct.salePrice ?? 0
        } else {
          productPrice = trueProduct.amount ?? 0
        }

        // apply code
        const discountAmount = productPrice * (truePromoCode.percentOff / 100)
        const newPrice = productPrice - discountAmount

        promoEffect = {
          ...promoEffect,
          hadEffect: true,
          code: promoCode,
        }

        // push the product & new price to the processed items
        // (the amount has been updated to be newPrice)
        processedCart.push({
          ...trueProduct,
          amount: newPrice,
        })

        continue
      }
    }

    // add the product normally if the code didn't apply
    processedCart.push({
      ...trueProduct,
      amount: trueProduct.onSale ? trueProduct.salePrice : trueProduct.amount,
    })
  }

  // calculate afterTotal
  afterTotal = processedCart.reduce((sum: number, p: Partial<Product>) => {
    return sum + p?.amount!
  }, 0)

  return {
    effect: promoEffect,
    products: processedCart,
    beforeTotal,
    afterTotal,
  }
}
