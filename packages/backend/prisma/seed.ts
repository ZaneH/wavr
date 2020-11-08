import { PrismaClient } from '@prisma/client'
import * as faker from 'faker'

const prisma = new PrismaClient()

const NUM_USERS = 10
const NUM_PRODUCTS = 10

interface SeedData {
  users: any[]
  products: any[]
}

const seedData: SeedData = { users: [], products: [] }

const main = async () => {
  await prisma.$connect()

  await seedUsers()
  await seedProducts()
}

const seedUsers = () => {
  for (let i = 0; i < NUM_USERS; i++) {
    const fakeTempUser = {
      email: faker.internet.email(),
      username: faker.internet.userName(),
      password: faker.internet.password(),
    }

    prisma.user.create({
      data: {
        email: fakeTempUser.email,
        password:
          '$2a$10$.1VJX4tzbcfx0vtXjxeM1uu96d6QtGvfRy6FwYFA7kLURal2NyG3i' /* gang */,
        username: fakeTempUser.username,
      },
    })

    console.log(`[#${i + 1}] Created user: `, fakeTempUser.username)
    seedData.users.push(fakeTempUser)
  }
}

const seedProducts = () => {
  for (let i = 0; i < NUM_PRODUCTS; i++) {
    const fakeTempProduct = {
      name: faker.random.words(2),
      description: 'Seeded product (for testing)',
    }

    prisma.product.create({
      data: {
        name: fakeTempProduct.name,
        description: fakeTempProduct.description,
      },
    })

    console.log(`[#${i + 1}] Created product: `, fakeTempProduct.name)
    seedData.products.push(fakeTempProduct)
  }
}

main()
  .catch((err) => {
    console.error(err)
  })
  .finally(() => {
    prisma.$disconnect()
  })
