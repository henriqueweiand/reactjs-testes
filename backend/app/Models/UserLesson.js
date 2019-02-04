'use strict'

const Model = use('Model')

class UserLesson extends Model {
  users () {
    return this.hasMany('App/Models/User', 'user_id', 'id')
  }

  lessons () {
    return this.hasOne('App/Models/Lesson', 'lesson_id', 'id')
  }
}

module.exports = UserLesson
