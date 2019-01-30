'use strict'

class Session {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      email: 'required',
      password: 'required'
    }
  }
}

module.exports = Session
