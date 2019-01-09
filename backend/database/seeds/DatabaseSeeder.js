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

class DatabaseSeeder {
  async run () {
    const user = await User.create({
      name: 'Henrique Weiand',
      email: 'henriqueweiand@gmail.com',
      password: '123456'
    })
  }
}

module.exports = DatabaseSeeder
