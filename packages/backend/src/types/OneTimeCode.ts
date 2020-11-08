import { objectType } from '@nexus/schema'

const OneTimeCode = objectType({
  name: 'OneTimeCode',
  definition(t) {
    t.model.id()
    t.model.expired()
  },
})

export default OneTimeCode
