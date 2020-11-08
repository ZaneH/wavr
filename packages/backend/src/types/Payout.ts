import { objectType } from '@nexus/schema'

const Payout = objectType({
  name: 'Payout',
  definition(t) {
    t.model.id()
    t.model.product()
    t.model.amount()
    t.model.createdAt()
  },
})

export default Payout
