import { objectType } from '@nexus/schema'

const PromoCode = objectType({
  name: 'PromoCode',
  definition(t) {
    t.model.id()
    t.model.affectsAll()
    t.model.code()
    t.model.createdAt()
    t.model.expiresAt()
    t.model.isArchived()
    t.model.percentOff()
    t.model.product()
    t.model.useLimit()
    t.model.user()
    t.model.uses()
  },
})

export default PromoCode
