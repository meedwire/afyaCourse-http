const { client } = require("../database");
const Cookie = require("../helpers/Cookie");

class HomeController {
    constructor() { }

    async index(req, res, next) {
        try {

            console.log(JSON.stringify(process.env.DATABASE, null, 4))
            await client.connect()

            console.log(client)
            // console.log(Cookie.get('loginuser', req))
            return res.send('login');
        } catch (error) {
            res.send('Error')
            console.log(error)
        }
    }
}

module.exports = HomeController