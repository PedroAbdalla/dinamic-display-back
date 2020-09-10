'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CategoriaSchema extends Schema {
    up () {
        this.create('categorias', (table) => {
            table.increments()
            table
                .integer('user_id')
                .unsigned() // somente valores positivos
                .references('id') // chave estrangeira
                .inTable('users') // chave estrangeira
                .onUpdate('CASCADE') // SO PQ SOU VIDA LOKA
                .onDelete('CASCADE') // SO PQ SOU VIDA LOKA
            table.string('nome', 80).notNullable()
            table
                .integer('img_id')
                .unsigned() // somente valores positivos
                .references('id') // chave estrangeira
                .inTable('files') // chave estrangeira
                .onUpdate('CASCADE') // SO PQ SOU VIDA LOKA
                .onDelete('SET NULL')
            table.boolean('padrao').defaultTo(false)
            table.timestamps()
        })
    }

    down () {
        this.drop('categorias')
    }
}

module.exports = CategoriaSchema
