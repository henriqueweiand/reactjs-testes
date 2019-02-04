'use strict'

const Lesson = use('App/Models/Lesson')

/**
 * Resourceful controller for interacting with lessons
 */
class LessonController {
  /**
   * Show a list of all tasks.
   * GET tasks
   */
  async index ({ request }) {
    const lesson = await Lesson.all()

    return lesson
  }

  /**
   * Create/save a new task
   * POST tasks
   */
  async store ({ request, auth }) {
    const data = request.all()
    const lesson = await Lesson.create({
      ...data,
      domain_id: auth.user.currentDomain
    })

    return lesson
  }

  /**
   * Display a single task.
   * GET tasks/:id
   */
  async show ({ params }) {
    const lesson = await Lesson.query().where('id', params.id).first()

    return lesson
  }

  /**
   * Update task details.
   * PUT or PATCH tasks/:id
   */
  async update ({ params, request }) {
    const data = request.all()
    const lesson = await Lesson.query().where('id', params.id).first()

    lesson.merge(data)

    await lesson.save()

    return lesson
  }

  /**
   * Delete a task with id.
   * DELETE tasks/:id
   */
  async destroy ({ params }) {
    const lesson = await Lesson.query().where('id', params.id).first()

    await lesson.delete()
  }
}

module.exports = LessonController
