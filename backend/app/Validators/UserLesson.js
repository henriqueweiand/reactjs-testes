'use strict'

class UserLesson {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      lesson_id: 'required|exists:lessons,id'
    }
  }
}

module.exports = UserLesson
