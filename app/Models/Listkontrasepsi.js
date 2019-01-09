'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Listkontrasepsi extends Model {
	 listpemakaikontrasepsi(){
        return this.hasMany('App/Models/ListPemakaiKontrasepsi')
    }
}

module.exports = Listkontrasepsi
