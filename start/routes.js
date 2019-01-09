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
  return { greeting: 'Hello world in JSON' }
})
Route.group(() => {
	Route.post('listpropinsis','ListpropinsiController.store')
	Route.get('listpropinsi', 'ListpropinsiController.index')
	Route.get('listpropinsi/:id', 'ListpropinsiController.show')
	Route.get('listpropinsiname/:Nama_Propinsi', 'ListpropinsiController.showbyname')
	Route.patch('listpropinsi/:id', 'ListpropinsiController.update')
	Route.delete('listpropinsi/:id', 'ListpropinsiController.destroy')

	Route.post('listkontrasepsi','ListkontrasepsiController.store')
	Route.get('listkontrasepsi', 'ListkontrasepsiController.index')
	Route.get('listkontrasepsi/:id', 'ListkontrasepsiController.show')
	Route.get('listkontrasepsi/:Nama_Kontrasepsi', 'ListkontrasepsiController.showbyname')


	Route.post('listpemakaikontrasepsi','ListPemakaiKontrasepsiController.store')
	Route.get('listpemakaikontrasepsi', 'ListPemakaiKontrasepsiController.index')
	Route.get('listpemakaikontrasepsi/:id', 'ListPemakaiKontrasepsiController.show')
	Route.delete('listpemakaikontrasepsi/:id', 'ListPemakaiKontrasepsiController.destroy')
	
	Route.get('profiles', 'ProfileController.index')
	Route.get('profile/:id', 'ProfileController.show')
	Route.post('profile','ProfileController.store')
	Route.patch('profile/:id', 'ProfileController.update')
	Route.delete('profile/:id', 'ProfileController.destroy')

}).prefix('api/v1')
