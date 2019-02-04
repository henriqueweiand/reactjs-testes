'use strict'

class Option {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      title: 'required',
      task_id: 'required|exists:tasks,id',
      type: 'required'
    }
  }
}

module.exports = Option
