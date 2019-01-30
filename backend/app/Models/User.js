'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use('Hash')

class User extends Model {
  static boot () {
    super.boot()

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */
    this.addHook('beforeSave', async (userInstance) => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password)
      }
    })

    this.addHook('afterCreate', 'UserHook.sendCreateNewUser')
  }

  domainJoins () {
    return this.hasMany('App/Models/UserDomain')
  }

  tokens () {
    return this.hasMany('App/Models/Token')
  }

  domains () {
    return this.belongsToMany('App/Models/Domain').pivotModel('App/Models/UserDomain')
  }

  async is (expression) {
    const domain = await this.domainJoins()
      .where('domain_id', this.currentDomain)
      .first()

    return domain.is(expression)
  }

  async can (expression) {
    const domain = await this.domainJoins()
      .where('domain_id', this.currentDomain)
      .first()

    return domain.can(expression)
  }

  async scope (required) {
    const domain = await this.domainJoins()
      .where('domain_id', this.currentDomain)
      .first()

    return domain.scope(required)
  }
}

module.exports = User
