'use strict'

const Schema = use('Schema')

class OptionSchema extends Schema {
  up () {
    this.create('options', (table) => {
      table.increments()
      table.timestamps()
      table.string('title', 255).notNullable()
      table.enu('type', ['right', 'wrong']).defaultTo('wrong')
      table
        .integer('task_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('tasks')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
    })
  }

  down () {
    this.drop('options')
  }
}

module.exports = OptionSchema
