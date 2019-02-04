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
const Lesson = use('App/Models/Lesson')
const Task = use('App/Models/Task')
const Option = use('App/Models/Option')

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

    const deleteEmpresa = await Permission.create({
      slug: 'empresa_delete',
      name: 'Deletar empresa'
    })

    const editEmpresa = await Permission.create({
      slug: 'empresa_edit',
      name: 'Editar empresa'
    })

    const admin = await Role.create({
      slug: 'administrador',
      name: 'Administrador'
    })

    const empresa = await Role.create({
      slug: 'empresa',
      name: 'Empresa'
    })

    await admin.permissions().attach([createEmpresa.id, editEmpresa.id, deleteEmpresa.id])
    await empresa.permissions().attach([editEmpresa.id])

    const domain = await user.domains().create({
      name: 'WeRide'
    })

    const domainJoin = await user.domainJoins().where('domain_id', domain.id).first()

    await domainJoin.roles().attach([admin.id])

    // Licoes
    const lesson = await Lesson.create({
      title: 'Lição inicial',
      description: 'Essa é a primeira lição cadastrada',
      color: '#dedede',
      domain_id: domain.id
    })

    const task = await Task.create({
      title: 'Task inicial',
      description: 'Essa é a primeira task cadastrada',
      type: 'option',
      lesson_id: lesson.id
    })

    const option = await Option.create({
      title: 'Opcao um',
      type: 'right',
      task_id: task.id
    })

    const option2 = await Option.create({
      title: 'Opcao dois',
      type: 'wrong',
      task_id: task.id
    })
  }
}

module.exports = DatabaseSeeder
