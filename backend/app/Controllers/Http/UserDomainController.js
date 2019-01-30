'use strict'

const UserDomain = use('App/Models/UserDomain')

class UserDomainController {
  async index ({ request }) {
    const userdomain = await UserDomain.query()
      .where('domain_id', request.domain.id)
      .with('user')
      .with('roles')
      .fetch()

    return userdomain
  }

  async update ({ request, params }) {
    const roles = request.only(['roles'])

    const domainJoin = await UserDomain.find(params.id)

    await domainJoin.roles().sync(roles)
  }
}

module.exports = UserDomainController
