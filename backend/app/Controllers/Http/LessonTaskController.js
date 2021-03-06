'use strict'

const Lesson = use('App/Models/Lesson')

/**
 * Resourceful controller for interacting with lessons
 */
class LessonTaskController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index () {
    const lesson = await Lesson
      .query()
      .with('tasks')
      .fetch()

    return lesson
  }

  async show ({ params }) {
    const lesson = await Lesson
      .query()
      .where('id', params.id)
      .with('tasks')
      .fetch()

    return lesson
  }
}

module.exports = LessonTaskController
