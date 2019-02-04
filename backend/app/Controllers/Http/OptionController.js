'use strict'

const Option = use('App/Models/Option')

/**
 * Resourceful controller for interacting with options
 */
class OptionController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index ({ request }) {
    const option = await Option.all()

    return option
  }

  /**
   * Create/save a new task
   * POST tasks
   */
  async store ({ request, auth }) {
    const data = request.all()
    const option = await Option.create(data)

    return option
  }

  /**
   * Display a single task.
   * GET tasks/:id
   */
  async show ({ params }) {
    const option = await Option.query().where('id', params.id).first()

    return option
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   */
  async update ({ params, request }) {
    const data = request.all()
    const option = await Option.query().where('id', params.id).first()

    option.merge(data)

    await option.save()

    return option
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   */
  async destroy ({ params }) {
    const option = await Option.query().where('id', params.id).first()

    await option.delete()
  }
}

module.exports = OptionController
