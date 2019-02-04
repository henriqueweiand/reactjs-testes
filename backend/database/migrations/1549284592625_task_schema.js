'use strict'

const Schema = use('Schema')

class TaskSchema extends Schema {
  up () {
    this.create('tasks', (table) => {
      table.increments()
      table.string('title', 255).notNullable()
      table.text('description', 255)
      table.enu('type', ['option', 'selection'])
      table
        .integer('lesson_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('lessons')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.timestamps()
    })
  }

  down () {
    this.drop('tasks')
  }
}

module.exports = TaskSchema
