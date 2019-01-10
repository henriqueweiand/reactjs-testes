'use strict'

/**
 * Resourceful controller for interacting with domains
 */
class DomainController {
  /**
   * Show a list of all domains.
   * GET domains
   */
  async index ({ auth }) {
    const domains = await auth.user.domains().fetch()

    return domains
  }

  /**
   * Create/save a new domain.
   * POST domains
   */
  async store ({ request, auth }) {
    const data = request.only(['name'])
    const domain = await auth.user.domains().create({
      ...data
    })

    return domain
  }

  /**
   * Display a single domain.
   * GET domains/:id
   */
  async show ({ params, auth }) {
    const domain = await auth.user.domains().where('domains.id', params.id).first()

    return domain
  }

  /**
   * Update domain details.
   * PUT or PATCH domains/:id
   */
  async update ({ params, request, auth }) {
    const data = request.only(['name'])
    const domain = await auth.user.domains().where('domains.id', params.id).first()

    domain.merge(data)

    await domain.save()

    return domain
  }

  /**
   * Delete a domain with id.
   * DELETE domains/:id
   */
  async destroy ({ params, auth }) {
    const domain = await auth.user.domains().where('domains.id', params.id).first()

    await domain.delete()
  }
}

module.exports = DomainController
