'use strict'

const UserDomain = use('App/Models/UserDomain')

class PermissionController {
  async show ({ request, auth }) {
    const domainJoin = await UserDomain.query()
      .where('domain_id', request.domain.id)
      .where('user_id', auth.user.id)
      .first()

    return {
      roles: await domainJoin.getRoles(),
      permissions: await domainJoin.getPermissions()
    }
  }
}

module.exports = PermissionController
