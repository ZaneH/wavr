import * as Typegen from 'nexus-plugin-prisma/typegen'
import * as Prisma from '@prisma/client';

// Pagination type
type Pagination = {
  first?: boolean
  last?: boolean
  before?: boolean
  after?: boolean
}

// Prisma custom scalar names
type CustomScalars = 'DateTime'

// Prisma model type definitions
interface PrismaModels {
  User: Prisma.User
  Product: Prisma.Product
  Transaction: Prisma.Transaction
  Payout: Prisma.Payout
  Tag: Prisma.Tag
  Review: Prisma.Review
  Image: Prisma.Image
  File: Prisma.File
  PromoCode: Prisma.PromoCode
  Withdraw: Prisma.Withdraw
  Report: Prisma.Report
  Ad: Prisma.Ad
  OneTimeCode: Prisma.OneTimeCode
}

// Prisma input types metadata
interface NexusPrismaInputs {
  Query: {
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'accountType' | 'adTokens' | 'avatarURL' | 'createdAt' | 'createdTags' | 'discordId' | 'displayName' | 'email' | 'emailVerified' | 'emailVerifyToken' | 'favorites' | 'isAdmin' | 'password' | 'passwordResetToken' | 'paypalEmail' | 'products' | 'promoCodes' | 'reviews' | 'transactions' | 'updatedAt' | 'username' | 'payouts' | 'isVerified' | 'verifiedAt' | 'withdraws' | 'reports' | 'unpaidBalance' | 'paidBalance' | 'emailOnSale' | 'emailUpdates'
      ordering: 'id' | 'accountType' | 'adTokens' | 'avatarURL' | 'createdAt' | 'discordId' | 'displayName' | 'email' | 'emailVerified' | 'emailVerifyToken' | 'isAdmin' | 'password' | 'passwordResetToken' | 'paypalEmail' | 'updatedAt' | 'username' | 'isVerified' | 'verifiedAt' | 'unpaidBalance' | 'paidBalance' | 'emailOnSale' | 'emailUpdates'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'owner' | 'ownerId' | 'reviews' | 'tags' | 'transactions' | 'updatedAt' | 'images' | 'isArchived' | 'file' | 'fileId' | 'promoCodes' | 'payouts' | 'users' | 'reports' | 'ads'
      ordering: 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'ownerId' | 'updatedAt' | 'isArchived' | 'fileId'
    }
    transactions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'approved' | 'buyer' | 'buyerId' | 'createdAt' | 'email' | 'licenseKey' | 'licenseRedeemed' | 'licenseKeyShown' | 'paypalPaymentId' | 'products' | 'updatedAt' | 'promos' | 'payouts'
      ordering: 'id' | 'amount' | 'approved' | 'buyerId' | 'createdAt' | 'email' | 'licenseKey' | 'licenseRedeemed' | 'licenseKeyShown' | 'paypalPaymentId' | 'updatedAt'
    }
    payouts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'amount' | 'user' | 'userId' | 'forPlatform' | 'product' | 'productId' | 'transaction' | 'transactionId'
      ordering: 'id' | 'createdAt' | 'amount' | 'userId' | 'forPlatform' | 'productId' | 'transactionId'
    }
    tags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'creator' | 'creatorId' | 'name' | 'products'
      ordering: 'id' | 'createdAt' | 'creatorId' | 'name'
    }
    reviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'author' | 'authorId' | 'createdAt' | 'isArchived' | 'message' | 'product' | 'productId' | 'stars' | 'updatedAt'
      ordering: 'id' | 'authorId' | 'createdAt' | 'isArchived' | 'message' | 'productId' | 'stars' | 'updatedAt'
    }
    images: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'isArchived' | 'product' | 'productId' | 'secret' | 'url'
      ordering: 'id' | 'createdAt' | 'isArchived' | 'productId' | 'secret' | 'url'
    }
    files: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'isArchived' | 'name' | 'secret' | 'url' | 'product' | 'oneTimeCodes'
      ordering: 'id' | 'createdAt' | 'isArchived' | 'name' | 'secret' | 'url'
    }
    promoCodes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'isArchived' | 'affectsAll' | 'code' | 'expiresAt' | 'percentOff' | 'product' | 'productId' | 'useLimit' | 'uses' | 'user' | 'userId' | 'transactions'
      ordering: 'id' | 'createdAt' | 'isArchived' | 'affectsAll' | 'code' | 'expiresAt' | 'percentOff' | 'productId' | 'useLimit' | 'uses' | 'userId'
    }
    withdraws: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'approved' | 'createdAt' | 'confirmToken' | 'user' | 'userId'
      ordering: 'id' | 'approved' | 'createdAt' | 'confirmToken' | 'userId'
    }
    reports: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'resolved' | 'reporter' | 'message' | 'product' | 'productId' | 'userId'
      ordering: 'id' | 'createdAt' | 'resolved' | 'message' | 'productId' | 'userId'
    }
    ads: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiresAt' | 'product' | 'productId'
      ordering: 'id' | 'createdAt' | 'expiresAt' | 'productId'
    }
    oneTimeCodes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expired' | 'file' | 'fileId' | 'code'
      ordering: 'id' | 'createdAt' | 'expired' | 'fileId' | 'code'
    }
  },
  User: {
    createdTags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'creator' | 'creatorId' | 'name' | 'products'
      ordering: 'id' | 'createdAt' | 'creatorId' | 'name'
    }
    favorites: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'owner' | 'ownerId' | 'reviews' | 'tags' | 'transactions' | 'updatedAt' | 'images' | 'isArchived' | 'file' | 'fileId' | 'promoCodes' | 'payouts' | 'users' | 'reports' | 'ads'
      ordering: 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'ownerId' | 'updatedAt' | 'isArchived' | 'fileId'
    }
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'owner' | 'ownerId' | 'reviews' | 'tags' | 'transactions' | 'updatedAt' | 'images' | 'isArchived' | 'file' | 'fileId' | 'promoCodes' | 'payouts' | 'users' | 'reports' | 'ads'
      ordering: 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'ownerId' | 'updatedAt' | 'isArchived' | 'fileId'
    }
    promoCodes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'isArchived' | 'affectsAll' | 'code' | 'expiresAt' | 'percentOff' | 'product' | 'productId' | 'useLimit' | 'uses' | 'user' | 'userId' | 'transactions'
      ordering: 'id' | 'createdAt' | 'isArchived' | 'affectsAll' | 'code' | 'expiresAt' | 'percentOff' | 'productId' | 'useLimit' | 'uses' | 'userId'
    }
    reviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'author' | 'authorId' | 'createdAt' | 'isArchived' | 'message' | 'product' | 'productId' | 'stars' | 'updatedAt'
      ordering: 'id' | 'authorId' | 'createdAt' | 'isArchived' | 'message' | 'productId' | 'stars' | 'updatedAt'
    }
    transactions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'approved' | 'buyer' | 'buyerId' | 'createdAt' | 'email' | 'licenseKey' | 'licenseRedeemed' | 'licenseKeyShown' | 'paypalPaymentId' | 'products' | 'updatedAt' | 'promos' | 'payouts'
      ordering: 'id' | 'amount' | 'approved' | 'buyerId' | 'createdAt' | 'email' | 'licenseKey' | 'licenseRedeemed' | 'licenseKeyShown' | 'paypalPaymentId' | 'updatedAt'
    }
    payouts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'amount' | 'user' | 'userId' | 'forPlatform' | 'product' | 'productId' | 'transaction' | 'transactionId'
      ordering: 'id' | 'createdAt' | 'amount' | 'userId' | 'forPlatform' | 'productId' | 'transactionId'
    }
    withdraws: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'approved' | 'createdAt' | 'confirmToken' | 'user' | 'userId'
      ordering: 'id' | 'approved' | 'createdAt' | 'confirmToken' | 'userId'
    }
    reports: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'resolved' | 'reporter' | 'message' | 'product' | 'productId' | 'userId'
      ordering: 'id' | 'createdAt' | 'resolved' | 'message' | 'productId' | 'userId'
    }
  }
  Product: {
    reviews: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'author' | 'authorId' | 'createdAt' | 'isArchived' | 'message' | 'product' | 'productId' | 'stars' | 'updatedAt'
      ordering: 'id' | 'authorId' | 'createdAt' | 'isArchived' | 'message' | 'productId' | 'stars' | 'updatedAt'
    }
    tags: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'creator' | 'creatorId' | 'name' | 'products'
      ordering: 'id' | 'createdAt' | 'creatorId' | 'name'
    }
    transactions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'approved' | 'buyer' | 'buyerId' | 'createdAt' | 'email' | 'licenseKey' | 'licenseRedeemed' | 'licenseKeyShown' | 'paypalPaymentId' | 'products' | 'updatedAt' | 'promos' | 'payouts'
      ordering: 'id' | 'amount' | 'approved' | 'buyerId' | 'createdAt' | 'email' | 'licenseKey' | 'licenseRedeemed' | 'licenseKeyShown' | 'paypalPaymentId' | 'updatedAt'
    }
    images: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'isArchived' | 'product' | 'productId' | 'secret' | 'url'
      ordering: 'id' | 'createdAt' | 'isArchived' | 'productId' | 'secret' | 'url'
    }
    promoCodes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'isArchived' | 'affectsAll' | 'code' | 'expiresAt' | 'percentOff' | 'product' | 'productId' | 'useLimit' | 'uses' | 'user' | 'userId' | 'transactions'
      ordering: 'id' | 'createdAt' | 'isArchived' | 'affectsAll' | 'code' | 'expiresAt' | 'percentOff' | 'productId' | 'useLimit' | 'uses' | 'userId'
    }
    payouts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'amount' | 'user' | 'userId' | 'forPlatform' | 'product' | 'productId' | 'transaction' | 'transactionId'
      ordering: 'id' | 'createdAt' | 'amount' | 'userId' | 'forPlatform' | 'productId' | 'transactionId'
    }
    users: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'accountType' | 'adTokens' | 'avatarURL' | 'createdAt' | 'createdTags' | 'discordId' | 'displayName' | 'email' | 'emailVerified' | 'emailVerifyToken' | 'favorites' | 'isAdmin' | 'password' | 'passwordResetToken' | 'paypalEmail' | 'products' | 'promoCodes' | 'reviews' | 'transactions' | 'updatedAt' | 'username' | 'payouts' | 'isVerified' | 'verifiedAt' | 'withdraws' | 'reports' | 'unpaidBalance' | 'paidBalance' | 'emailOnSale' | 'emailUpdates'
      ordering: 'id' | 'accountType' | 'adTokens' | 'avatarURL' | 'createdAt' | 'discordId' | 'displayName' | 'email' | 'emailVerified' | 'emailVerifyToken' | 'isAdmin' | 'password' | 'passwordResetToken' | 'paypalEmail' | 'updatedAt' | 'username' | 'isVerified' | 'verifiedAt' | 'unpaidBalance' | 'paidBalance' | 'emailOnSale' | 'emailUpdates'
    }
    reports: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'resolved' | 'reporter' | 'message' | 'product' | 'productId' | 'userId'
      ordering: 'id' | 'createdAt' | 'resolved' | 'message' | 'productId' | 'userId'
    }
    ads: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expiresAt' | 'product' | 'productId'
      ordering: 'id' | 'createdAt' | 'expiresAt' | 'productId'
    }
  }
  Transaction: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'owner' | 'ownerId' | 'reviews' | 'tags' | 'transactions' | 'updatedAt' | 'images' | 'isArchived' | 'file' | 'fileId' | 'promoCodes' | 'payouts' | 'users' | 'reports' | 'ads'
      ordering: 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'ownerId' | 'updatedAt' | 'isArchived' | 'fileId'
    }
    promos: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'isArchived' | 'affectsAll' | 'code' | 'expiresAt' | 'percentOff' | 'product' | 'productId' | 'useLimit' | 'uses' | 'user' | 'userId' | 'transactions'
      ordering: 'id' | 'createdAt' | 'isArchived' | 'affectsAll' | 'code' | 'expiresAt' | 'percentOff' | 'productId' | 'useLimit' | 'uses' | 'userId'
    }
    payouts: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'amount' | 'user' | 'userId' | 'forPlatform' | 'product' | 'productId' | 'transaction' | 'transactionId'
      ordering: 'id' | 'createdAt' | 'amount' | 'userId' | 'forPlatform' | 'productId' | 'transactionId'
    }
  }
  Payout: {

  }
  Tag: {
    products: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'owner' | 'ownerId' | 'reviews' | 'tags' | 'transactions' | 'updatedAt' | 'images' | 'isArchived' | 'file' | 'fileId' | 'promoCodes' | 'payouts' | 'users' | 'reports' | 'ads'
      ordering: 'id' | 'amount' | 'createdAt' | 'description' | 'name' | 'onSale' | 'salePrice' | 'ownerId' | 'updatedAt' | 'isArchived' | 'fileId'
    }
  }
  Review: {

  }
  Image: {

  }
  File: {
    oneTimeCodes: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'createdAt' | 'expired' | 'file' | 'fileId' | 'code'
      ordering: 'id' | 'createdAt' | 'expired' | 'fileId' | 'code'
    }
  }
  PromoCode: {
    transactions: {
      filtering: 'AND' | 'OR' | 'NOT' | 'id' | 'amount' | 'approved' | 'buyer' | 'buyerId' | 'createdAt' | 'email' | 'licenseKey' | 'licenseRedeemed' | 'licenseKeyShown' | 'paypalPaymentId' | 'products' | 'updatedAt' | 'promos' | 'payouts'
      ordering: 'id' | 'amount' | 'approved' | 'buyerId' | 'createdAt' | 'email' | 'licenseKey' | 'licenseRedeemed' | 'licenseKeyShown' | 'paypalPaymentId' | 'updatedAt'
    }
  }
  Withdraw: {

  }
  Report: {

  }
  Ad: {

  }
  OneTimeCode: {

  }
}

// Prisma output types metadata
interface NexusPrismaOutputs {
  Query: {
    user: 'User'
    users: 'User'
    product: 'Product'
    products: 'Product'
    transaction: 'Transaction'
    transactions: 'Transaction'
    payout: 'Payout'
    payouts: 'Payout'
    tag: 'Tag'
    tags: 'Tag'
    review: 'Review'
    reviews: 'Review'
    image: 'Image'
    images: 'Image'
    file: 'File'
    files: 'File'
    promoCode: 'PromoCode'
    promoCodes: 'PromoCode'
    withdraw: 'Withdraw'
    withdraws: 'Withdraw'
    report: 'Report'
    reports: 'Report'
    ad: 'Ad'
    ads: 'Ad'
    oneTimeCode: 'OneTimeCode'
    oneTimeCodes: 'OneTimeCode'
  },
  Mutation: {
    createOneUser: 'User'
    updateOneUser: 'User'
    updateManyUser: 'BatchPayload'
    deleteOneUser: 'User'
    deleteManyUser: 'BatchPayload'
    upsertOneUser: 'User'
    createOneProduct: 'Product'
    updateOneProduct: 'Product'
    updateManyProduct: 'BatchPayload'
    deleteOneProduct: 'Product'
    deleteManyProduct: 'BatchPayload'
    upsertOneProduct: 'Product'
    createOneTransaction: 'Transaction'
    updateOneTransaction: 'Transaction'
    updateManyTransaction: 'BatchPayload'
    deleteOneTransaction: 'Transaction'
    deleteManyTransaction: 'BatchPayload'
    upsertOneTransaction: 'Transaction'
    createOnePayout: 'Payout'
    updateOnePayout: 'Payout'
    updateManyPayout: 'BatchPayload'
    deleteOnePayout: 'Payout'
    deleteManyPayout: 'BatchPayload'
    upsertOnePayout: 'Payout'
    createOneTag: 'Tag'
    updateOneTag: 'Tag'
    updateManyTag: 'BatchPayload'
    deleteOneTag: 'Tag'
    deleteManyTag: 'BatchPayload'
    upsertOneTag: 'Tag'
    createOneReview: 'Review'
    updateOneReview: 'Review'
    updateManyReview: 'BatchPayload'
    deleteOneReview: 'Review'
    deleteManyReview: 'BatchPayload'
    upsertOneReview: 'Review'
    createOneImage: 'Image'
    updateOneImage: 'Image'
    updateManyImage: 'BatchPayload'
    deleteOneImage: 'Image'
    deleteManyImage: 'BatchPayload'
    upsertOneImage: 'Image'
    createOneFile: 'File'
    updateOneFile: 'File'
    updateManyFile: 'BatchPayload'
    deleteOneFile: 'File'
    deleteManyFile: 'BatchPayload'
    upsertOneFile: 'File'
    createOnePromoCode: 'PromoCode'
    updateOnePromoCode: 'PromoCode'
    updateManyPromoCode: 'BatchPayload'
    deleteOnePromoCode: 'PromoCode'
    deleteManyPromoCode: 'BatchPayload'
    upsertOnePromoCode: 'PromoCode'
    createOneWithdraw: 'Withdraw'
    updateOneWithdraw: 'Withdraw'
    updateManyWithdraw: 'BatchPayload'
    deleteOneWithdraw: 'Withdraw'
    deleteManyWithdraw: 'BatchPayload'
    upsertOneWithdraw: 'Withdraw'
    createOneReport: 'Report'
    updateOneReport: 'Report'
    updateManyReport: 'BatchPayload'
    deleteOneReport: 'Report'
    deleteManyReport: 'BatchPayload'
    upsertOneReport: 'Report'
    createOneAd: 'Ad'
    updateOneAd: 'Ad'
    updateManyAd: 'BatchPayload'
    deleteOneAd: 'Ad'
    deleteManyAd: 'BatchPayload'
    upsertOneAd: 'Ad'
    createOneOneTimeCode: 'OneTimeCode'
    updateOneOneTimeCode: 'OneTimeCode'
    updateManyOneTimeCode: 'BatchPayload'
    deleteOneOneTimeCode: 'OneTimeCode'
    deleteManyOneTimeCode: 'BatchPayload'
    upsertOneOneTimeCode: 'OneTimeCode'
  },
  User: {
    id: 'String'
    accountType: 'AccountType'
    adTokens: 'Float'
    avatarURL: 'String'
    createdAt: 'DateTime'
    createdTags: 'Tag'
    discordId: 'String'
    displayName: 'String'
    email: 'String'
    emailVerified: 'Boolean'
    emailVerifyToken: 'String'
    favorites: 'Product'
    isAdmin: 'Boolean'
    password: 'String'
    passwordResetToken: 'String'
    paypalEmail: 'String'
    products: 'Product'
    promoCodes: 'PromoCode'
    reviews: 'Review'
    transactions: 'Transaction'
    updatedAt: 'DateTime'
    username: 'String'
    payouts: 'Payout'
    isVerified: 'Boolean'
    verifiedAt: 'DateTime'
    withdraws: 'Withdraw'
    reports: 'Report'
    unpaidBalance: 'Float'
    paidBalance: 'Float'
    emailOnSale: 'Boolean'
    emailUpdates: 'Boolean'
  }
  Product: {
    id: 'String'
    amount: 'Float'
    createdAt: 'DateTime'
    description: 'String'
    name: 'String'
    onSale: 'Boolean'
    salePrice: 'Float'
    owner: 'User'
    ownerId: 'String'
    reviews: 'Review'
    tags: 'Tag'
    transactions: 'Transaction'
    updatedAt: 'DateTime'
    images: 'Image'
    isArchived: 'Boolean'
    file: 'File'
    fileId: 'String'
    promoCodes: 'PromoCode'
    payouts: 'Payout'
    users: 'User'
    reports: 'Report'
    ads: 'Ad'
  }
  Transaction: {
    id: 'String'
    amount: 'Float'
    approved: 'Boolean'
    buyer: 'User'
    buyerId: 'String'
    createdAt: 'DateTime'
    email: 'String'
    licenseKey: 'String'
    licenseRedeemed: 'Boolean'
    licenseKeyShown: 'Int'
    paypalPaymentId: 'String'
    products: 'Product'
    updatedAt: 'DateTime'
    promos: 'PromoCode'
    payouts: 'Payout'
  }
  Payout: {
    id: 'String'
    createdAt: 'DateTime'
    amount: 'Float'
    user: 'User'
    userId: 'String'
    forPlatform: 'Boolean'
    product: 'Product'
    productId: 'String'
    transaction: 'Transaction'
    transactionId: 'String'
  }
  Tag: {
    id: 'String'
    createdAt: 'DateTime'
    creator: 'User'
    creatorId: 'String'
    name: 'String'
    products: 'Product'
  }
  Review: {
    id: 'String'
    author: 'User'
    authorId: 'String'
    createdAt: 'DateTime'
    isArchived: 'Boolean'
    message: 'String'
    product: 'Product'
    productId: 'String'
    stars: 'Int'
    updatedAt: 'DateTime'
  }
  Image: {
    id: 'String'
    createdAt: 'DateTime'
    isArchived: 'Boolean'
    product: 'Product'
    productId: 'String'
    secret: 'String'
    url: 'String'
  }
  File: {
    id: 'String'
    createdAt: 'DateTime'
    isArchived: 'Boolean'
    name: 'String'
    secret: 'String'
    url: 'String'
    product: 'Product'
    oneTimeCodes: 'OneTimeCode'
  }
  PromoCode: {
    id: 'String'
    createdAt: 'DateTime'
    isArchived: 'Boolean'
    affectsAll: 'Boolean'
    code: 'String'
    expiresAt: 'DateTime'
    percentOff: 'Int'
    product: 'Product'
    productId: 'String'
    useLimit: 'Int'
    uses: 'Int'
    user: 'User'
    userId: 'String'
    transactions: 'Transaction'
  }
  Withdraw: {
    id: 'String'
    approved: 'Boolean'
    createdAt: 'DateTime'
    confirmToken: 'String'
    user: 'User'
    userId: 'String'
  }
  Report: {
    id: 'String'
    createdAt: 'DateTime'
    resolved: 'Boolean'
    reporter: 'User'
    message: 'String'
    product: 'Product'
    productId: 'String'
    userId: 'String'
  }
  Ad: {
    id: 'String'
    createdAt: 'DateTime'
    expiresAt: 'DateTime'
    product: 'Product'
    productId: 'String'
  }
  OneTimeCode: {
    id: 'String'
    createdAt: 'DateTime'
    expired: 'Boolean'
    file: 'File'
    fileId: 'String'
    code: 'String'
  }
}

// Helper to gather all methods relative to a model
interface NexusPrismaMethods {
  User: Typegen.NexusPrismaFields<'User'>
  Product: Typegen.NexusPrismaFields<'Product'>
  Transaction: Typegen.NexusPrismaFields<'Transaction'>
  Payout: Typegen.NexusPrismaFields<'Payout'>
  Tag: Typegen.NexusPrismaFields<'Tag'>
  Review: Typegen.NexusPrismaFields<'Review'>
  Image: Typegen.NexusPrismaFields<'Image'>
  File: Typegen.NexusPrismaFields<'File'>
  PromoCode: Typegen.NexusPrismaFields<'PromoCode'>
  Withdraw: Typegen.NexusPrismaFields<'Withdraw'>
  Report: Typegen.NexusPrismaFields<'Report'>
  Ad: Typegen.NexusPrismaFields<'Ad'>
  OneTimeCode: Typegen.NexusPrismaFields<'OneTimeCode'>
  Query: Typegen.NexusPrismaFields<'Query'>
  Mutation: Typegen.NexusPrismaFields<'Mutation'>
}

interface NexusPrismaGenTypes {
  inputs: NexusPrismaInputs
  outputs: NexusPrismaOutputs
  methods: NexusPrismaMethods
  models: PrismaModels
  pagination: Pagination
  scalars: CustomScalars
}

declare global {
  interface NexusPrismaGen extends NexusPrismaGenTypes {}

  type NexusPrisma<
    TypeName extends string,
    ModelOrCrud extends 'model' | 'crud'
  > = Typegen.GetNexusPrisma<TypeName, ModelOrCrud>;
}
  