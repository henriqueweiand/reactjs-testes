'use strict'

const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello henrique in JSON' }
})

Route.post('sessions', 'SessionController.store').validator('Session')
Route.post('users', 'UserController.store').validator('User')

Route.group(() => {
  Route.get('roles', 'RoleController.index')

  Route.get('domains', 'DomainController.index')
  Route.get('domains/:id', 'DomainController.show')
  Route.post('domains', 'DomainController.store').validator('Domain').middleware(['domain', 'can:empresa_create'])
  Route.put('domains/:id', 'DomainController.update').validator('Domain').middleware(['domain', 'can:empresa_edit'])
  Route.delete('domains/:id', 'DomainController.destroy').middleware(['domain', 'can:empresa_delete'])
}).middleware(['auth']
)

Route.group(() => {
  Route.get('permissions', 'PermissionController.show')
  Route.get('user_domain', 'UserDomainController.index')
  Route.put('user_domain/:id', 'UserDomainController.update').middleware('is:administrador')
}).middleware(['auth', 'domain'])
