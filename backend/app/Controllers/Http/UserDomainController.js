'use strict'

/**
 * Resourceful controller for interacting with userdomains
 */
class UserDomainController {
  /**
   * Show a list of all userdomains.
   * GET userdomains
   */
  async index ({ request, response, view }) {
  }

  /**
   * Render a form to be used for creating a new userdomain.
   * GET userdomains/create
   */
  async create ({ request, response, view }) {
  }

  /**
   * Create/save a new userdomain.
   * POST userdomains
   */
  async store ({ request, response }) {
  }

  /**
   * Display a single userdomain.
   * GET userdomains/:id
   */
  async show ({ params, request, response, view }) {
  }

  /**
   * Render a form to update an existing userdomain.
   * GET userdomains/:id/edit
   */
  async edit ({ params, request, response, view }) {
  }

  /**
   * Update userdomain details.
   * PUT or PATCH userdomains/:id
   */
  async update ({ params, request, response }) {
  }

  /**
   * Delete a userdomain with id.
   * DELETE userdomains/:id
   */
  async destroy ({ params, request, response }) {
  }
}

module.exports = UserDomainController
