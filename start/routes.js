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
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

//POST
Route.post('files', 'FileController.store')
Route.post('users', 'UserController.store')
Route.post('sessions', 'SessionController.store')


//GET
Route.get('files/:id', 'FileController.show')

// Route.group(() => {
    //CRUD
    Route.resource('categorias', 'CategoriaController').apiOnly()
// }).middleware(['auth'])

Route.get('/', () => {
    return { greeting: 'Hello world in JSON' }
})
