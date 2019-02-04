'use strict'

class Task {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      lesson_id: 'required|exists:lessons,id',
      type: 'required'
    }
  }
}

module.exports = Task
