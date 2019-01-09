'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ListPemakaiKontrasepsiSchema extends Schema {
  up () {
    this.create('list_pemakai_kontrasepsis', (table) => {
      table.increments()
      table.integer('id_propinsi').unsigned().references('id').inTable('listpropinsis')
      table.integer('id_kontrasepsi').unsigned().references('id').inTable('listkontrasepsis')
      table.integer('jumlah_pemakai', 100).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('list_pemakai_kontrasepsis')
  }
}

module.exports = ListPemakaiKontrasepsiSchema
