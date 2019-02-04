'use strict'

const Task = use('App/Models/Task')

/**
 * Resourceful controller for interacting with tasks
 */
class TaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index ({ request }) {
    const task = await Task.all()

    return task
  }

  /**
   * Create/save a new task
   * POST tasks
   */
  async store ({ request, auth }) {
    const data = request.all()
    const task = await Task.create(data)

    return task
  }

  /**
   * Display a single task.
   * GET tasks/:id
   */
  async show ({ params }) {
    const task = await Task.query().where('id', params.id).first()

    return task
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   */
  async update ({ params, request }) {
    const data = request.all()
    const task = await Task.query().where('id', params.id).first()

    task.merge(data)

    await task.save()

    return task
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   */
  async destroy ({ params }) {
    const task = await Task.query().where('id', params.id).first()

    await task.delete()
  }
}

module.exports = TaskController
