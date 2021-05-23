const Cookie = require("../helpers/Cookie");
const { Crypto } = require("../helpers/Crypto")

class LoginUserController {
    constructor() { }

    index(req, res, next) {
        return res.render('login', { message: null });
    }

    async login(req, res, next) {
        try {
            const { cpf, password } = req.body

            console.log(cpf, password)

            const crypto = new Crypto()

            await crypto.compare(password, cpf)

            Cookie.set('loginuser', 1, res, 600000)

            res.render('info', { message: "Página em construção", error: { status: 'Estamos trabalhando...', stack: 'Atenção !!' } })
        } catch (error) {
            res.render('error', { message: error.message, error: { status: 500, stack: 'error' } })
        }
    }
}

module.exports = LoginUserController