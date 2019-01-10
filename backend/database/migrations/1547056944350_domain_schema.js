'use strict'

const Schema = use('Schema')

class DomainSchema extends Schema {
  up () {
    this.create('domains', (table) => {
      table.increments()
      table.string('name', 254).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('domains')
  }
}

module.exports = DomainSchema
