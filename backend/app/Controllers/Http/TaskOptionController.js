'use strict'

const Task = use('App/Models/Task')

/**
 * Resourceful controller for interacting with lessons
 */
class TaskOptionController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index () {
    const task = await Task
      .query()
      .with('options')
      .fetch()

    return task
  }

  async show ({ params, request }) {
    const task = await Task
      .query()
      .where('id', params.id)
      .with('options')
      .fetch()

    return task
  }
}

module.exports = TaskOptionController
