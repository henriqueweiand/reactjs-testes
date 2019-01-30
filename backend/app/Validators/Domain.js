'use strict'

class Domain {
  get validateAll () {
    return true
  }

  get rules () {
    return {
      name: 'required'
    }
  }
}

module.exports = Domain
