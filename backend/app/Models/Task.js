'use strict'

const Model = use('Model')

class Task extends Model {
  options () {
    return this.hasMany('App/Models/Option')
  }
}

module.exports = Task
