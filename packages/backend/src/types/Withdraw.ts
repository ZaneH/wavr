import { objectType } from '@nexus/schema'

const Withdraw = objectType({
  name: 'Withdraw',
  definition(t) {
    t.model.id()
    t.model.approved()
    t.model.createdAt()
  },
})

export default Withdraw
