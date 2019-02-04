'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello henrique in JSON' }
})

Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User')

Route.group(() => {
  Route.get('lesson/task/option', 'LessonTaskOptionController.index')
  Route.get('lesson/:id/task/option', 'LessonTaskOptionController.show')

  Route.get('lesson/task', 'LessonTaskController.index')
  Route.get('lesson/:id/task', 'LessonTaskController.show')

  Route.get('task/option', 'TaskOptionController.index')
  Route.get('task/:id/option', 'TaskOptionController.show')

  Route.get('lesson', 'LessonController.index')
  Route.get('lesson/:id', 'LessonController.show')

  Route.get('task', 'TaskController.index')
  Route.get('task/:id', 'TaskController.show')

  Route.get('option', 'OptionController.index')
  Route.get('option/:id', 'OptionController.show')

  Route.get('roles', 'RoleController.index')

  Route.get('domains', 'DomainController.index')
  Route.get('domains/:id', 'DomainController.show')
  Route.post('domains', 'DomainController.store').validator('Domain').middleware(['domain', 'can:empresa_create'])
  Route.put('domains/:id', 'DomainController.update').validator('Domain').middleware(['domain', 'can:empresa_edit'])
  Route.delete('domains/:id', 'DomainController.destroy').middleware(['domain', 'can:empresa_delete'])
}).middleware(['auth']
)

Route.group(() => {
  Route.post('lesson', 'LessonController.store').validator('Lesson')
  Route.put('lesson/:id', 'LessonController.update').validator('Lesson')
  Route.delete('lesson/:id', 'LessonController.destroy')

  Route.post('task', 'TaskController.store').validator('Task')
  Route.put('task/:id', 'TaskController.update').validator('Task')
  Route.delete('task/:id', 'TaskController.destroy')

  Route.post('option', 'OptionController.store').validator('Option')
  Route.put('option/:id', 'OptionController.update').validator('Option')
  Route.delete('option/:id', 'OptionController.destroy')

  Route.get('permissions', 'PermissionController.show')
  Route.get('user_domain', 'UserDomainController.index')
  Route.put('user_domain/:id', 'UserDomainController.update').middleware('is:administrador')
}).middleware(['auth', 'domain'])
