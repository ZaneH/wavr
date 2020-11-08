import { objectType } from '@nexus/schema'

const Review = objectType({
  name: 'Review',
  definition(t) {
    t.model.id()
    t.model.author()
    t.model.createdAt()
    t.model.message()
    t.model.product()
    t.model.stars()
    t.model.updatedAt()
  },
})

export default Review
