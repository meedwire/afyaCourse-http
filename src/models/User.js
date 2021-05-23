const { DB, client } = require("../database");
const { Crypto } = require("../helpers/Crypto");

class User {
    
    constructor(user) {
        this.user = {...user}
    }

    async save() {
        try {
            const db = new DB()
        
            const query = 'insert into users(name, cpf, street, number_of, postcode, complement, number_card, password, email) values($1, $2, $3, $4, $5, $6, $7, $8, $9)'
    
            const crypto = new Crypto()

            const hash = await crypto.hash(this.user.password)
    
            const values = [this.user.name, this.user.cpf, this.user.street, this.user.number, this.user.postcode, this.user.complement, this.user.number_card, hash, this.user.email]
    
            await db.execute(query, values)

            return true
        } catch (error) {
            throw new Error(error)
        }
    }
}

module.exports = { User }