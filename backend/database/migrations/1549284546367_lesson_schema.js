'use strict'

const Schema = use('Schema')

class LessonSchema extends Schema {
  up () {
    this.create('lessons', (table) => {
      table.increments()
      table.string('title', 255).notNullable()
      table.text('description', 255).notNullable()
      table.text('color', 32).notNullable()
      table.string('image', 255).nullable()
      table.string('icon', 255).nullable()
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
    this.drop('lessons')
  }
}

module.exports = LessonSchema
