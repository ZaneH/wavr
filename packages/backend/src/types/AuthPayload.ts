import { objectType } from '@nexus/schema'

const AuthPayload = objectType({
  name: 'AuthPayload',
  definition(t) {
    t.string('token')
    t.field('user', {
      type: 'User',
      nullable: true,
    })
  },
})

export default AuthPayload
