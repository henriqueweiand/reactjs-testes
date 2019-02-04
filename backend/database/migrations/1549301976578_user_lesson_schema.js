'use strict'

const Schema = use('Schema')

class UserLessonSchema extends Schema {
  up () {
    this.create('user_lessons', (table) => {
      table.increments()
      table.integer('level').defaultTo(0)
      table.integer('count').defaultTo(0) // contador para avancar um nivel
      table
        .integer('user_id')
        .unsigned()
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
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
    this.drop('user_lessons')
  }
}

module.exports = UserLessonSchema
