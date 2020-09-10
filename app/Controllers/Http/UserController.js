'use strict'

const User = use('App/Models/User')
const Database = use('Database')

class UserController {

    async index({ params }) {
        const users = await User.query()
            .fetch()
        return users
    }

    async show({ params }) {
        const user = await User.findOrFail(params.id)
        return user
    }

    async store({ request }) {
        //pega os valores enviados por post
        const data = request.only(['username', 'email', 'password'])

        // beginTransaction garante q todas as operações deram certo
        const trx = await Database.beginTransaction()

        //cria um novo usuario
        const user = await User.create(data, trx)

        await trx.commit()

        return user
    }
}

module.exports = UserController
