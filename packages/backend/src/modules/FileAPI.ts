import { S3, AWSError } from 'aws-sdk'
import { PromiseResult } from 'aws-sdk/lib/request'
import { prismaClient } from '../context'
import { s3client } from '../server'

interface IUploadFile {
  data: any
  contentLength: number
  contentType: string
  name: string
  bucket?: string
  folder?: string
}

interface IDeleteFile {
  key: string
}

interface IStorageUser {
  id: string
}

/**
 * Find out how much storage a user ID is taking up on S3 with their product content.
 * @param args The user ID
 */
export const totalStorageForUser = async (args: IStorageUser) => {
  const allActiveProducts = await prismaClient.product.findMany({
    where: {
      ownerId: args.id,
      isArchived: false,
    },
    select: {
      file: true,
    },
  })

  const allProductStorageKeys = allActiveProducts.map((product) => {
    return product.file?.secret
  })

  let storageTakenInBytes = 0

  // simply add S3 requests to reqPromises
  const reqPromises: Array<Promise<
    PromiseResult<S3.HeadObjectOutput, AWSError>
  >> = []
  allProductStorageKeys.forEach(async (key) => {
    // not every product has an upload
    if (key) {
      const headObject = s3client
        .headObject({
          Key: key!,
          Bucket: process.env.S3_BUCKET ?? 'wavr',
        })
        .promise()

      reqPromises.push(headObject)
    }
  })

  if (reqPromises.length <= 0) {
    return 0
  }

  // when all requests finish, return storageTakenInBytes
  return Promise.all(reqPromises)
    .then((allResults) => {
      allResults.forEach((result) => {
        storageTakenInBytes += result?.ContentLength ?? 0
      })

      return storageTakenInBytes
    })
    .catch((err) => {
      console.error('Error fetching S3 object: ', err)

      return 0
    })
}

export const deleteFile = async (args: IDeleteFile) => {
  // delete the file from S3
  s3client.deleteObject(
    {
      Bucket: process.env.S3_BUCKET ?? 'wavr',
      Key: args.key,
    },
    (err) => {
      if (err) {
        return console.error(err)
      }
    }
  )
}

/**
 * Upload a file to S3
 * @param args Argument object to provide to S3
 */
export const uploadFile = async (args: IUploadFile) => {
  if (!args?.data) {
    return console.error('No file data provided for upload')
  }

  const response = s3client
    .upload({
      Key: `${process.env.NODE_ENV === 'production' ? '' : 'dev/'}${
        args.folder ? `${args.folder}/` : ''
      }${Date.now()}-${args.name}`,
      ACL: 'public-read',
      Body: args.data,
      ContentLength: args.contentLength,
      ContentType: args.contentType,
      Bucket: args.bucket ?? process.env.S3_BUCKET ?? 'wavr',
    })
    .promise()

  return response
}
