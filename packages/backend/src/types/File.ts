import { objectType } from '@nexus/schema'

const File = objectType({
  name: 'File',
  definition(t) {
    t.model.id()
    t.model.createdAt()
    t.model.isArchived()
    t.model.name()
    t.model.product()
    t.model.url()
  },
})

export default File
