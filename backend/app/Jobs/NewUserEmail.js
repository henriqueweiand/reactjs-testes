'use strict'

const Mail = use('Mail')

class NewUserEmail {
  // If this getter isn't provided, it will default to 1.
  // Increase this number to increase processing concurrency.
  static get concurrency () {
    return 1
  }

  // This is required. This is a unique key used to identify this job.
  static get key () {
    return 'NewUserEmail-job'
  }

  // This is where the work is done.
  async handle ({ user, email }) {
    await Mail.send(
      ['emails.newUser'],
      { user: user.name },
      message => {
        message
          .to(email)
          .from('henriqueweiand@gmail.com', 'Henrique Weiand')
          .subject('Teste')
      }
    )
  }
}

module.exports = NewUserEmail
