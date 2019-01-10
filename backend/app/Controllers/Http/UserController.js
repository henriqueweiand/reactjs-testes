'use strict'

const User = use('App/Models/User')
const Domain = use('App/Models/Domain')

class UserController {
  async store ({ request, response, auth }) {
    const data = request.only(['name', 'email', 'password'])

    const domain = await Domain.query().where('id', 1).pluck('id')
    const user = await User.create(data)

    await user.domains().attach(domain)
  }

  async teste ({ request, response }) {
    return request.domain
  }
}

module.exports = UserController
