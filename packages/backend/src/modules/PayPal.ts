import _ from 'lodash'
import { prismaClient } from '../context'
import { calculateCart } from './Audit'
import { getSellerMultiplier } from './User'

const paypal = require('@paypal/checkout-server-sdk')

const clientId = process.env.SANDBOX_PAYPAL_ID
const clientSecret = process.env.SANDBOX_PAYPAL_SECRET

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret)

export const client = new paypal.core.PayPalHttpClient(environment)

interface Payout {
  transactionId: string
  productId: string
  amount: number
}

interface IPaySellers {
  payouts: Payout[]
}

/**
 * Fetches a PayPal Order
 * @param orderId The PayPal Order ID
 */
export const getPayPalOrder = async (orderId: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    // free transactions won't have an orderId
    if (!orderId) {
      return resolve({})
    }

    const request = new paypal.orders.OrdersGetRequest(orderId)

    let order

    try {
      order = await client.execute(request)
      return resolve(order)
    } catch (err) {
      return reject('Getting order information failed')
    }
  })
}

const getPayPalFee = (order: any) => {
  const paypalFee =
    order?.result?.purchase_units?.[0]?.payments?.captures?.[0]
      ?.seller_receivable_breakdown?.paypal_fee?.value

  return Number(paypalFee)
}

/**
 * This check verifies that the PayPal items are the same as the transaction
 * items. I don't know if this protections against fraud or breaks real purchases atm.
 * @param order The PayPal order object
 * @param claimedProducts Products that the user claims to have transacted
 */
export const isValidPayment = (
  order: any,
  claimedProducts: any,
  promoCode?: string
): Promise<boolean> => {
  return new Promise(async (resolve, reject) => {
    const transactionProductIds = claimedProducts?.connect?.map(
      (product) => product?.id as string
    )

    const truthCart = await calculateCart(
      transactionProductIds ?? [],
      promoCode ?? ''
    )

    // it's a free transaction
    if (truthCart.afterTotal === 0) {
      return resolve(true)
    }

    const paypalProductIds = order?.result?.purchase_units?.[0].items?.map(
      (item: any) => item.sku
    )

    const arraysMatch = _.isEmpty(
      _.xor(paypalProductIds, transactionProductIds)
    )

    if (arraysMatch) {
      return resolve(true)
    } else {
      console.error(
        'Mismatched arrays: ',
        transactionProductIds,
        paypalProductIds
      )

      return reject('The payment appears invalid. Contact support.')
    }
  })
}

/**
 * Pay sellers their cut. In addition, pay the platform.
 * @param args Data structure for paying to sellers
 */
export const paySellers = async (args: IPaySellers, order: any) => {
  // get all of the purchased products
  const boughtProducts = await prismaClient.product.findMany({
    where: {
      OR: args.payouts.map((product) => {
        return {
          id: {
            equals: product.productId,
          },
        }
      }),
    },
  })

  // for-sync so products bought from the same person aren't overwritten by async
  for (let i = 0; i < boughtProducts.length; i++) {
    const boughtProduct = boughtProducts[i]
    const ownerId = boughtProduct.ownerId

    const owner = await prismaClient.user.findOne({
      where: {
        id: ownerId!,
      },
    })

    // TODO: Maybe handle this better. Should it default to 'FREE'?
    const sellerMultiplier = getSellerMultiplier({
      accountType: owner?.accountType ?? 'FREE',
    })

    //  amount * (1 - mult)
    let sellersCut = Number(args.payouts[i].amount) * (1 - sellerMultiplier)

    // calculate the seller's new unpaid balance
    const newBalance = Number(owner?.unpaidBalance) + sellersCut

    // take the platform's cut
    let platformCut = Number(args.payouts[i].amount) * sellerMultiplier

    // split the PayPal fee between all bought products
    const partOfPayPalFee = getPayPalFee(order) / boughtProducts.length

    // split the 'part' of the PayPal fee between the platform and the seller
    // the seller pays 80% of the fee
    platformCut -= partOfPayPalFee * 0.2
    sellersCut -= partOfPayPalFee * 0.8

    // create a payout object for the platform
    await prismaClient.payout.create({
      data: {
        product: {
          connect: {
            id: boughtProduct.id,
          },
        },
        transaction: {
          connect: {
            id: args.payouts[i].transactionId,
          },
        },
        amount: platformCut,
        forPlatform: true,
      },
    })

    // create a payout object for the seller
    await prismaClient.payout.create({
      data: {
        product: {
          connect: {
            id: boughtProduct.id,
          },
        },
        transaction: {
          connect: {
            id: args.payouts[i].transactionId,
          },
        },
        user: {
          connect: {
            id: ownerId ?? undefined,
          },
        },
        amount: sellersCut,
      },
    })

    await prismaClient.user.update({
      where: {
        id: ownerId!,
      },
      data: {
        unpaidBalance: newBalance,
      },
    })

    console.log(
      'Paid: ',
      owner?.username,
      `(${Number(args.payouts[i].amount)})`
    )
  }
}
