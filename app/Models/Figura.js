'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Figura extends Model {
    Categoria () {
        return this.belongsTo('App/Model/Categoria')
    }

    File () {
        return this.belongsTo('App/Model/File')
    }
}

module.exports = Figura
