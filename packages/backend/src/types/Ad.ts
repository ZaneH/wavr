import { objectType } from '@nexus/schema'

const Ad = objectType({
  name: 'Ad',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.expiresAt()
    t.model.product()
  },
})

export default Ad
