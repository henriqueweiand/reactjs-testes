'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.0/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello henrique in JSON' }
})

Route.post('sessions', 'SessionController.store')
Route.post('users', 'UserController.store')

Route.group(() => {
  Route.get('domains', 'DomainController.index')
  Route.get('domains/:id', 'DomainController.show')
  Route.post('domains', 'DomainController.store').middleware(['can:empresa_create'])
  Route.put('domains', 'DomainController.update').middleware(['can:empresa_edit'])
  Route.delete('domains', 'DomainController.destroy').middleware(['can:empresa_delete'])
}).middleware(['auth']
)

Route.group(() => {
  Route.get('users', 'UserController.teste')
}).middleware(['auth', 'domain'])
