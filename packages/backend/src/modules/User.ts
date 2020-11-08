import { AccountType } from '@prisma/client'
import { prismaClient } from '../context'
import { totalStorageForUser } from './FileAPI'

/**
 * Gets the account type. This returns type AccountType.
 * @param param0 Get account type for this user ID
 */
export const getAccountType = async ({
  id,
}: {
  id: string
}): Promise<AccountType | undefined> => {
  const user = await prismaClient.user.findOne({
    where: {
      id,
    },
  })

  if (user) {
    return user.accountType
  } else {
    return undefined
  }
}

/**
 * Returns 0.04, 0.025, 0.01 depending on the seller's account type
 */
export const getSellerMultiplier = ({
  accountType,
}: {
  accountType: AccountType
}) => {
  switch (accountType) {
    case AccountType.FREE: {
      return 0.04
    }
    case AccountType.PRO: {
      return 0.02
    }
    case AccountType.PROPLUS: {
      return 0.015
    }
    default: {
      throw new Error('Unknown account type')
    }
  }
}

/**
 * Returns the maximum S3 storage for the given account type
 * @param param0 The user account type
 */
export const getMaxStorage = ({
  accountType,
}: {
  accountType: AccountType
}) => {
  switch (accountType) {
    case AccountType.FREE: {
      // 25gb
      return 2.5e10
    }
    case AccountType.PRO: {
      // 100gb
      return 5e10
    }
    case AccountType.PROPLUS: {
      // 500gb
      return 5e11
    }
    default: {
      throw new Error('Unknown account type')
    }
  }
}

export const getMaxProductSpace = ({
  accountType,
}: {
  accountType: AccountType
}) => {
  switch (accountType) {
    case AccountType.FREE: {
      return 50
    }
    case AccountType.PRO: {
      return 100
    }
    case AccountType.PROPLUS: {
      return 1000
    }
    default: {
      throw new Error('Unknown account type')
    }
  }
}

/**
 * Determines if the user can upload a file of this size
 */
export const canUploadFile = async ({
  sizeBytes,
  userId,
}: {
  sizeBytes: number
  userId: string
}) => {
  const user = await prismaClient.user.findOne({
    where: {
      id: userId,
    },
  })

  const maxStorage = getMaxStorage({ accountType: user?.accountType ?? 'FREE' })
  const currentStorage = await totalStorageForUser({ id: userId })

  if (currentStorage + sizeBytes > maxStorage) {
    return false
  } else {
    return true
  }
}
