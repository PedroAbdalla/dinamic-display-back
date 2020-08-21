'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')
const Env = use('Env')

class File extends Model {
    //Cria um campo que não possui na tabela
    static get computed () {
        return ['url']
    }

    getUrl ({ id }) {
        return `${Env.get('APP_URL')}/files/${id}`
    }
}

module.exports = File
