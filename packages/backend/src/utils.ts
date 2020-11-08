import { verify } from 'jsonwebtoken'
import { Context } from './context'

export const APP_SECRET = 'wavr+secret+42/0/2020'

interface Token {
  userId: string
}

export function getUserId(context: Context) {
  const Authorization = context.request.get('Authorization')

  if (Authorization) {
    const token = Authorization.replace('Bearer ', '')
    const verifiedToken = verify(token, APP_SECRET) as Token
    return verifiedToken && verifiedToken.userId
  }
}

export function getUserIdFromToken(token: string) {
  const verifiedToken = verify(token, APP_SECRET) as Token
  return verifiedToken && verifiedToken.userId
}
