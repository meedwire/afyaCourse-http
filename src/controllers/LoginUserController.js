const Cookie = require("../helpers/Cookie");

class LoginUserController {
    constructor() { }

    index(req, res, next) {
        return res.render('login', {message: null});
    }

    login(req, res, next) {
        const {user, password} = req.body

        Cookie.set('loginuser', 1, res, 600000)

        Cookie.set('teste', 1, res, 600000)

        // res.redirect('/home')

        console.log(user, password);
        return res.send('success');
    }
}

module.exports = LoginUserController