'use strict'

const Categoria = use('App/Models/Categoria')
const fileController = use('App/Controllers/Http/FileController')
const Database = use('Database')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with categorias
 */
class CategoriaController {
    /**
     * Show a list of all categorias.
     * GET categorias
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async index({ request, response, view }) {
        const categorias = await Categoria.all()
        return categorias
    }


    /**
     * Create/save a new categoria.
     * POST categorias
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async store({ request, response, auth }) {
        const fc = new fileController()        
        const data = request.only(['nome'])
        
        // beginTransaction garante q todas as operações deram certo
        const trx = await Database.beginTransaction()

        const upload = request.file('file', {size: '2mb'})

        if(upload){
            const imgId = await fc.addProjectFile(upload)
            const cat = await Categoria.create({ 
                ...data,
                user_id: auth.user.id,
                img_id: imgId
            })
            await trx.commit()
            return cat
        } else {
            const cat = await Categoria.create({ ...data, user_id: auth.user.id})
            await trx.commit()
            return cat
        }
    }

    /**
     * Display a single categoria.
     * GET categorias/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */
    async show({ params, request, response, view }) {
    }

    /**
     * Render a form to update an existing categoria.
     * GET categorias/:id/edit
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     * @param {View} ctx.view
     */

    async update({ params, request, response }) {
    }

    /**
     * Delete a categoria with id.
     * DELETE categorias/:id
     *
     * @param {object} ctx
     * @param {Request} ctx.request
     * @param {Response} ctx.response
     */
    async destroy({ params, request, response }) {
    }
}

module.exports = CategoriaController
