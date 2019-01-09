'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProfilesSchema extends Schema {
  up () {
    this.create('profiles', (table) => {
      table.increments()
      table.string('image_profile').nullable()
      table.string('fullname').nullable()
      table.string('email').nullable()
      table.integer('age').nullable()
      table.string('address').nullable()
      table.string('bio').nullable()
      table.string('profession').nullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('profiles')
  }
}

module.exports = ProfilesSchema
