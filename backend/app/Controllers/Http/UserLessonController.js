'use strict'

const UserLesson = use('App/Models/UserLesson')

class UserLessonController {
  async index () {
    const userlesson = await UserLesson
      .query()
      .with('lessons.domain')
      .fetch()

    return userlesson
  }

  async store ({ request, auth }) {
    const data = request.all()
    const userlesson = await UserLesson.create({
      ...data,
      user_id: auth.user.id
    })

    return userlesson
  }
}

module.exports = UserLessonController
