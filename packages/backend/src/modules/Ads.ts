import { SortOrder } from '@prisma/client'
import { prismaClient } from '../context'

export function addDays(date: Date, days: number) {
  var result = new Date(date)
  result.setDate(result.getDate() + days)
  return result
}

export function subtractDays(date: Date, days: number) {
  var result = new Date(date)
  result.setDate(result.getDate() - days)
  return result
}

export const isAdActive = async (productId: string) => {
  // get the most recent ad for the productId
  const ad = await prismaClient.ad.findMany({
    where: {
      productId,
    },
    orderBy: {
      createdAt: SortOrder.desc,
    },
  })

  if (ad.length <= 0) {
    return false
  }

  // calculate the day it expires
  const expiredDate = ad?.[0]?.expiresAt

  // get right now
  const now = new Date()

  if (expiredDate <= now) {
    return false
  } else {
    return true
  }
}
