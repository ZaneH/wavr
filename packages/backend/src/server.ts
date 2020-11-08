require('dotenv-flow').config()

import { GraphQLServer } from 'graphql-yoga'
import { permissions } from './permissions'
import { createContext, prismaClient } from './context'
import cors from 'cors'
import { S3 } from 'aws-sdk'
import multer from 'multer'
import { uploadFile, deleteFile } from './modules/FileAPI'
import { APP_SECRET, getUserIdFromToken } from './utils'
import { json } from 'body-parser'
import { schema } from './schema'
import * as Sentry from '@sentry/node'
import OAuth from 'discord-oauth2'
import { verify } from 'jsonwebtoken'
import { canUploadFile } from './modules/User'
import { claimVoteTokens } from './modules/Vote'

const upload = multer()

Sentry.init({
  dsn:
    'https://27cee3eb286e42ffa93e310de6493618@o452283.ingest.sentry.io/5446920',
  tracesSampleRate: 1.0,
})

export const discordOauth = new OAuth({
  clientId: process.env.DISCORD_CLIENT_ID,
  clientSecret: process.env.DISCORD_CLIENT_SECRET,
  redirectUri:
    process.env.NODE_ENV === 'production'
      ? 'https://api.wavr.me:4000/discord-oauth'
      : 'http://localhost:4000/discord-oauth',
})

export const s3client = new S3({
  accessKeyId: process.env.S3_ACCESS_KEY,
  secretAccessKey: process.env.S3_SECRET_ACCESS_KEY,
  params: {
    Bucket: process.env.S3_BUCKET,
  },
})

const server = new GraphQLServer({
  schema,
  context: createContext,
  middlewares: [permissions],
})

server.express.use(
  cors({
    credentials: true,
    origin: true,
  })
)

server.express.use(json())

server.start(() => {
  console.log(`🚀 Server ready at: http://localhost:4000`)
  prismaClient.$connect()
  console.log(`💎 Prisma is connected`)
})

// Download API
server.express.get('/download', async (req, res) => {
  // code belongs to a OneTimeCode object
  const code = req?.query?.code as string

  const otcs = await prismaClient.oneTimeCode.findMany({
    where: {
      code,
    },
  })

  if (otcs.length && !otcs?.[0]?.expired) {
    const fileId = otcs?.[0]?.fileId

    const fileToDownload = await prismaClient.file.findOne({
      where: {
        id: fileId,
      },
    })

    await prismaClient.oneTimeCode.update({
      where: {
        id: otcs?.[0]?.id,
      },
      data: {
        expired: true,
      },
    })

    return s3client
      .getObject({
        Bucket: process.env.S3_BUCKET ?? 'wavr',
        Key: fileToDownload!.secret,
      })
      .on('httpHeaders', function (statusCode, headers) {
        res.set('Content-Length', headers['content-length'])
        res.set('Content-Type', headers['content-type'])
        res.set(
          'Content-Disposition',
          `attachment; filename=${fileToDownload?.name}`
        )
      })
      .createReadStream()
      .pipe(res)
  }

  return res.status(401).send('Invalid link')
})

// Discord Oauth2 callback
server.express.get('/discord-oauth', async (req, res) => {
  // access code is the oauth code from Discord
  const accessCode = String(req?.query?.code)

  // state is a base64 encoded, signed auth token from Wavr
  const state = String(req?.query?.state)

  // TODO: Add a cooldown for updating the oauth

  return discordOauth
    .tokenRequest({
      code: accessCode,
      grantType: 'authorization_code',
      scope: ['identify'],
    })
    .then((token) => {
      discordOauth
        .getUser(token?.access_token)
        .then(async (user) => {
          const discordId = user?.id
          const wavrToken = Buffer.from(state, 'base64').toString('utf-8')
          const wavrUserId = getUserIdFromToken(wavrToken)

          // associate the discord id with the user id
          if (discordId && wavrUserId) {
            await prismaClient.user.update({
              where: {
                id: wavrUserId,
              },
              data: {
                discordId,
              },
            })

            return res
              .status(200)
              .send(
                'Successfully linked your Discord account. You can close this page.'
              )
          } else {
            throw new Error(
              'There was an issue attaching your Discord ID to your Wavr account.'
            )
          }
        })
        .catch((e) => {
          Sentry.captureException(e)
          return res.status(401).send('Something went wrong fetching the user')
        })
    })
    .catch((e) => {
      Sentry.captureException(e)
      return res.status(401).send('Something went wrong requesting your token')
    })
})

// Top.gg votes for ad tokens
server.express.post('/webhook/topgg', async (req, res) => {
  if (req.headers?.authorization !== process.env.TOP_GG_SECRET) {
    return res.status(401).send('Invalid request')
  }

  if (req?.body?.type !== 'upvote') {
    return res.status(401).send('Invalid request')
  }

  try {
    const discordId = req?.body?.user
    claimVoteTokens(discordId, 0.05)

    return res.status(200).send('Upvote received')
  } catch (e) {
    Sentry.captureException(e)
  }

  return res.status(401).send('Error')
})

server.express.post('/webhook/dbl', async (req, res) => {
  if (req.headers?.authorization !== process.env.DBL_SECRET) {
    return res.status(401).send('Invalid request')
  }

  try {
    const discordId = req?.body?.id
    claimVoteTokens(discordId, 0.075)
  } catch (e) {
    Sentry.captureException(e)
  }

  return res.status(200).send('Debugging')
})

server.express.post('/webhook/discordservers', async (req, res) => {
  try {
    const type = req?.body?.type

    console.log('DISCORD SERVERS')
    console.log(JSON.stringify(req.body))
    console.log(JSON.stringify(req.headers))

    if (type !== 'gems') {
      return res.status(401).send('Invalid request')
    }

    // claimVoteTokens(discordId, 0.05)

    return res.status(200).send('Upvote received')
  } catch (e) {
    Sentry.captureException(e)
  }

  return res.status(401).send('Error')
})

server.express.post('/upload', upload.single('file'), async (req, res) => {
  // authenticate before trying to upload anything
  let auth = ''

  try {
    auth = JSON.parse(req.headers?.auth as string)?.accessToken ?? ''
  } catch (err) {
    auth = (req.headers?.auth as string) ?? ''
  }

  const userId = getUserIdFromToken(auth)

  if (!userId) {
    return res.status(401).send("Couldn't verify your identity")
  }

  // allows /upload to be used for multiple upload types
  const uploadType = req.body?.type ?? req.headers?.type

  // check if this user has enough space
  const hasSpace = await canUploadFile({ sizeBytes: req.file.size, userId })
  if (!hasSpace && uploadType === 'content') {
    return res.status(413).send('Not enough storage space left')
  }

  // if an image is over 1mb, return an error
  if (req.file?.size > 1e6 && uploadType === 'image') {
    return res.status(413).send('Image must be less than or equal to 1mb')
  }

  // if an avatar is over 1mb, return an error
  if (req.file?.size > 1e6 && uploadType === 'avatar') {
    return res.status(413).send('Avatar must be less than or equal to 1mb')
  }

  // if a file is over 300mb, return an error
  if (req.file?.size > 3e8 && uploadType === 'content') {
    return res
      .status(413)
      .send(
        'Files are currently limited to 300mb, use a text file containg a Google Drive link as an alternative.'
      )
  }

  if (!req.file) {
    return res.status(413).send('No file provided')
  }

  // the attachedObjectId is the ID in the database for the uploadType
  const attachedObjectId = req.body?.attachedObjectId

  // this `if` handles thumbnails, file uploads, and avatars
  if (['image', 'content', 'avatar'].includes(uploadType?.toLowerCase())) {
    // this is a temporary var. to delete the file if anything goes wrong
    let uploadKey = ''

    // TODO: Remove the previous file associated with attachedObjectId

    const filename = req.file?.filename ?? userId
    const mimetype = req.file?.mimetype

    const filenameWithExtension = `${filename}.${mimetype.split('/').pop()}`

    // upload to S3
    return uploadFile({
      name: filenameWithExtension,
      contentLength: req.file?.size,
      contentType: req.file?.mimetype,
      data: req.file?.buffer,
      folder: uploadType?.toLowerCase(),
    })
      .then(async (result) => {
        if (!result) {
          // this would be an S3 issue
          throw new Error('File upload results returned empty')
        }

        // save key first in case of an error
        uploadKey = result?.Key

        if (uploadType === 'avatar') {
          if (!userId) {
            res
              .status(413)
              .send(
                'There was a problem uploading your image. Try signing out and signing back in.'
              )
          }

          prismaClient.user
            .update({
              where: {
                id: userId,
              },
              data: {
                avatarURL: result.Location,
              },
            })
            .then((result) => {
              return res.status(200).send(result)
            })
            .catch((err) => {
              deleteFile({
                key: uploadKey,
              })

              return res.status(413).send(err)
            })
        } else if (uploadType === 'image') {
          // TODO: Verify that the uploader has access to this product
          // write the result to Prisma
          prismaClient.image
            .create({
              data: {
                secret: result.Key,
                url: result.Location,
                product: {
                  connect: {
                    id: attachedObjectId,
                  },
                },
              },
            })
            .then(async (createdImage) => {
              // when we successfully upload an image,
              // archive the existing image rows for the product
              await prismaClient.image.updateMany({
                where: {
                  AND: {
                    isArchived: false,
                    productId: attachedObjectId,
                    id: {
                      not: {
                        equals: createdImage.id,
                      },
                    },
                  },
                },
                data: {
                  isArchived: true,
                },
              })

              return res.status(200).send(result)
            })
            .catch((err) => {
              deleteFile({
                key: uploadKey,
              })

              return res
                .status(500)
                .send(
                  'There was a problem putting your file in the database. Try again?'
                )
            })
        } else if (uploadType === 'content') {
          // TODO: Verify that the uploader has access to this product
          // find the previous file attached to the product
          const oldFile = await prismaClient.file.findMany({
            where: {
              product: {
                id: attachedObjectId,
              },
            },
          })

          if (oldFile.length) {
            // remove the old file from S3
            deleteFile({
              key: oldFile?.[0]?.secret,
            })

            // remove it from the db
            await prismaClient.file.delete({
              where: {
                id: oldFile?.[0]?.id,
              },
            })
          }

          // write the result to prisma
          prismaClient.file
            .create({
              data: {
                name: req.file.originalname ?? req.file.filename,
                secret: result.Key,
                url: result.Location,
                product: {
                  connect: {
                    id: attachedObjectId,
                  },
                },
              },
            })
            .then(async (createdFile) => {
              await prismaClient.file.updateMany({
                where: {
                  isArchived: false,
                  product: {
                    id: attachedObjectId,
                  },
                  id: {
                    not: {
                      equals: createdFile.id,
                    },
                  },
                },
                data: {
                  isArchived: true,
                },
              })

              // TODO: Remove the old file from S3

              return res.status(200).send(result)
            })
            .catch((err) => {
              deleteFile({
                key: uploadKey,
              })

              return res
                .status(500)
                .send(
                  'There was a problem putting your file in the database. Try again?'
                )
            })
        }
      })
      .catch((err) => {
        console.error(err)
        res
          .status(500)
          .send('There was an issue uploading your file. Try again?')

        deleteFile({
          key: uploadKey,
        })
      })
  }

  return res.status(200)
})
