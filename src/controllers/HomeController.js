const { client } = require("../database");
const Cookie = require("../helpers/Cookie");

class HomeController {
    constructor() { }

    async index(req, res, next) {
        try {
            // console.log(Cookie.get('loginuser', req))
            return res.render('index');
        } catch (error) {
            res.send('Error')
        }
    }
}

module.exports = HomeController