'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListpropinsiSchema extends Schema {
  up () {
    this.create('listpropinsis', (table) => {
      table.increments()
      table.string('Nama_Propinsi').notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('listpropinsis')
  }
}

module.exports = ListpropinsiSchema
