'use strict'

const Kue = use('Kue')
const Job = use('App/Jobs/NewUserEmail')

const UserHook = exports = module.exports = {}

UserHook.sendCreateNewUser = async (user) => {
  const { email } = user

  Kue.dispatch(Job.key, { user, email }, { attempts: 3 })
}
