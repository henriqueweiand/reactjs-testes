'use strict'

class Lesson {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      description: 'required',
      color: 'required'
    }
  }
}

module.exports = Lesson
