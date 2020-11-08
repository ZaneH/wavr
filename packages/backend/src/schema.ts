import { makeSchema } from '@nexus/schema'
import { nexusSchemaPrisma } from 'nexus-plugin-prisma/schema'
import {
  AuthPayload,
  User,
  Product,
  File,
  Image,
  Mutation,
  PromoCode,
  Query,
  Review,
  Tag,
  Transaction,
  Withdraw,
  Report,
  Ad,
  Payout,
  OneTimeCode,
} from './types'

export const schema = makeSchema({
  types: [
    Ad,
    AuthPayload,
    User,
    Product,
    File,
    Image,
    Mutation,
    PromoCode,
    Query,
    Review,
    Tag,
    Transaction,
    Withdraw,
    Report,
    Payout,
    OneTimeCode,
  ],
  plugins: [
    nexusSchemaPrisma({
      experimentalCRUD: true,
    }),
  ],
  nonNullDefaults: {
    output: true,
  },
  outputs: {
    schema: __dirname + '/generated/schema.graphql',
    typegen: __dirname + '/generated/nexus.ts',
  },
  typegenAutoConfig: {
    contextType: 'Context.Context',
    sources: [
      {
        source: '@prisma/client',
        alias: 'client',
      },
      {
        source: require.resolve('./context'),
        alias: 'Context',
      },
    ],
  },
})
