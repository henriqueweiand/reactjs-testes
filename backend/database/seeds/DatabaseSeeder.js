'use strict'

/*
|--------------------------------------------------------------------------
| DatabaseSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

const User = use('App/Models/User')
const Domain = use('App/Models/Domain')

const Role = use('Adonis/Acl/Role')
const Permission = use('Adonis/Acl/Permission')

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Henrique Weiand',
      email: 'henriqueweiand@gmail.com',
      password: '123456'
    })

    const createEmpresa = await Permission.create({
      slug: 'empresa_create',
      name: 'Criar empresa'
    })

    const editEmpresa = await Permission.create({
      slug: 'empresa_edit',
      name: 'Editar empresa'
    })

    const admin = await Role.create({
      slug: 'adinistrador',
      name: 'Administrador'
    })

    const empresa = await Role.create({
      slug: 'empresa',
      name: 'Empresa'
    })

    await admin.permissions().attach([createEmpresa.id, editEmpresa.id])
    await empresa.permissions().attach([editEmpresa.id])

    const domain = await user.domains().create({
      name: 'WeRide'
    })

    const domainJoin = await user.domainJoins().where('domain_id', domain.id).first()

    await domainJoin.roles().attach([admin.id])
  }
}

module.exports = DatabaseSeeder
