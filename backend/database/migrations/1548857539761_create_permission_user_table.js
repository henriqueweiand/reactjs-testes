'use strict'

const Schema = use('Schema')

class PermissionUserTableSchema extends Schema {
  up () {
    this.create('permission_user_domain', table => {
      table.increments()
      table.integer('permission_id').unsigned().index()
      table.foreign('permission_id').references('id').on('permissions').onDelete('cascade')
      table.integer('user_domain_id').unsigned().index()
      table.foreign('user_domain_id').references('id').on('user_domains').onDelete('cascade')
      table.timestamps()
    })
  }

  down () {
    this.drop('permission_user_domain')
  }
}

module.exports = PermissionUserTableSchema
