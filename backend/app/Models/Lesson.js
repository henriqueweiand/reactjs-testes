'use strict'

const Model = use('Model')

class Lesson extends Model {
  tasks () {
    return this.hasMany('App/Models/Task')
  }
}

module.exports = Lesson
