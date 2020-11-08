import moment from 'moment'
import { prismaClient } from '../context'

/**
 * Returns a Promo Code with uses++
 * @param code Increment `uses` of this code by 1
 */
export const spendPromoCode = async (code: string) => {
  const foundCode = await prismaClient.promoCode.findOne({
    where: {
      code,
    },
  })

  if (foundCode) {
    return await prismaClient.promoCode.update({
      where: {
        code,
      },
      data: {
        uses: {
          set: foundCode?.uses + 1,
        },
      },
    })
  }
}

/**
 * Determine if the code is expired
 */
export const isCodeExpired = async (code: string) => {
  const foundCode = await prismaClient.promoCode.findOne({
    where: {
      code,
    },
  })

  // if foundCode is use-limited,
  // check if uses is >= useLimit
  if (foundCode?.useLimit) {
    if ((foundCode?.uses ?? 0) >= foundCode?.useLimit) {
      return true
    }
  }

  // if foundCode is time-limited,
  // check if expiresAt >= now
  if (foundCode?.expiresAt) {
    const startOfExpiredDate = moment(foundCode?.expiresAt).startOf('day')
    const nowDate = moment()

    if (startOfExpiredDate.isBefore(nowDate)) {
      return true
    }
  }

  return false
}
