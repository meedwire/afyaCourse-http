const bcrypt = require('bcrypt');
const { DB } = require('../../database');


const path = require('path')
const env = process.env.NODE_ENV === 'development' ? 'development' : null


if (env){
    const dotent = require('dotenv').config({ path: path.join(__dirname, '..', '..', `.${env}.env`) })
}


class Crypto {
    constructor() { }

    async hash(password) {
        try {
            const salt = parseInt(process.env.SALT_ROUNDS)

            return await bcrypt.hash(password, salt);
        } catch (error) {
            throw new Error(error)
        }
    }

    async compare(password, cpf) {
        try {
            const db = new DB()
            const query = 'SELECT * FROM users where cpf=$1'

            const user = await db.execute(query, [cpf])

            if (user){
                const success = await bcrypt.compare(password, user.password)

                if (!success){
                   throw new Error('Ops..., A senha digitada não confere com a senha cadastrada.')
                }

                return 
            }
            
            throw new Error('Usuário não encontrado.')
            
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = { Crypto }