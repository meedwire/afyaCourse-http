const { Client, Pool } = require('pg')

const path = require('path')
const dotent = require('dotenv').config({ path: path.join(__dirname, '..', '..', '.development.env') })

// const client = new Client({
//     user: process.env.DB_USER,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD_DB
// })

const pool = new Pool({
    user: process.env.DB_USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD_DB
})

class DB {
    constructor(client) { }

    async execute(query, values) {
        try {
            const client = await pool.connect()

            await client.query(query, values)

            await client.end()

            return true
        } catch (error) {
            console.log(error)
            throw new Error('Ops... Algo deu  errado ao tentar executar a query')
        }
    }
}

module.exports = { DB }


