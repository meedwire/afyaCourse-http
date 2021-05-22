const { User } = require("../models/User");

class RegisterPatientController {
    constructor() { }

    index(req, res, next) {
        return res.render('register');
    }

    async register(req, res, next) {
        try {
            const { name, cpf, street, number, postcode, complement, number_card, email} = req.body

            const user = new User({ name, cpf, street, number, postcode, complement, number_card, email })

            Object.entries(user.user).forEach(([key, value]) => {
                
                if (value === ''){
                    throw new Error(`Ops... Parece que tem algo de errado com seus dados, que tal voltar e revisar ?.`)
                }
            })
            

            await user.save()
            
            return res.render('login', {message: 'Um e-mail de confirmação foi enviado para seu e-mail.'});
        } catch (error) {
            console.log(error)
            res.render('error', {message: error.message, error:{status: 500, stack: 'error'}})
        }
    }
}

module.exports = RegisterPatientController