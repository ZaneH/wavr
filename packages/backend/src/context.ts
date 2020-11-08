import { PrismaClient } from '@prisma/client'
import { ContextParameters } from 'graphql-yoga/dist/types'

export const prismaClient = new PrismaClient({
  errorFormat: 'minimal',
})

export interface Context {
  prisma: PrismaClient
  request: any
}

export function createContext(request: ContextParameters) {
  return {
    ...request,
    prisma: prismaClient,
  }
}
