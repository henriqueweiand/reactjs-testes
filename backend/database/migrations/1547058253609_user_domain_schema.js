'use strict'

const Schema = use('Schema')

class UserDomainSchema extends Schema {
  up () {
    this.create('user_domains', (table) => {
      table.increments()
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table
        .integer('domain_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('domains')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('user_domains')
  }
}

module.exports = UserDomainSchema
