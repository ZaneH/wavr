import { objectType } from '@nexus/schema'

const Report = objectType({
  name: 'Report',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.message()
    t.model.product()
    t.model.reporter()
    t.model.resolved()
  },
})

export default Report
