'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class FiguraSchema extends Schema {
    up () {
        this.create('figuras', (table) => {
            table.increments()
            table
                .integer('id_categoria')
                .unsigned() // somente valores positivos
                .references('id') // chave estrangeira
                .inTable('categorias') // chave estrangeira
                .onUpdate('CASCADE') // SO PQ SOU VIDA LOKA
                .onDelete('CASCADE') // SO PQ SOU VIDA LOKA
            table.string('fonetica', 80).notNullable()
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
        this.drop('figuras')
    }
}

module.exports = FiguraSchema
