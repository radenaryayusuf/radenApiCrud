'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListkontrasepsiSchema extends Schema {
  up () {
    this.create('listkontrasepsis', (table) => {
      table.increments()
      table.string('Nama_Kontrasepsi').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('listkontrasepsis')
  }
}

module.exports = ListkontrasepsiSchema
