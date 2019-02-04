'use strict'

const Model = use('Model')

class Lesson extends Model {
  tasks () {
    return this.hasMany('App/Models/Task')
  }

  domain () {
    return this.hasOne('App/Models/Domain', 'domain_id', 'id')
  }
}

module.exports = Lesson
