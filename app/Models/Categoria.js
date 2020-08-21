'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Categoria extends Model {
    // relacionamento, a categoria pertence ao um unico usuario
    User () {
        return this.belongsTo('App/Model/User')
    }

    Figura () {
        return this.hasMany('App/Model/Figura')
    }

    File () {
        return this.belongsTo('App/Model/File')
    }
}

module.exports = Categoria
