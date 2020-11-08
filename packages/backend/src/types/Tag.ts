import { objectType } from '@nexus/schema'

const Tag = objectType({
  name: 'Tag',
  definition(t) {
    t.model.id()
    t.model.name()
    t.model.products({
      filtering: {
        isArchived: true,
      },
    })
  },
})

export default Tag
