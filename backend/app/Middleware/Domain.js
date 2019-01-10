'use strict'

class Domain {
  async handle ({ request, response, auth }, next) {
    // call next to advance the request

    const domain_id = request.header('domain')
    let domain = null

    if (domain_id) { domain = await auth.user.domains().where('domain_id', domain_id).first() }

    if (!domain) { return response.status(401).send() }

    auth.user.currentDomain = domain.id
    request.domain = domain

    await next()
  }
}

module.exports = Domain
