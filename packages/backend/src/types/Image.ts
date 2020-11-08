import { objectType } from '@nexus/schema'
import { getUserId } from '../utils'

const Image = objectType({
  name: 'Image',
  definition(t) {
    t.model.id()
    t.model.isArchived()
    t.model.url()
  },
})

export default Image
