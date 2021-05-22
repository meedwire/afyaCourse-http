const HomeController = require("./HomeController")
const LoginUserController = require("./LoginUserController")
const RegisterPatientController = require("./RegisterPatientController")

const registerPatientController = new RegisterPatientController()
const loginUserController = new LoginUserController()
const homeController = new HomeController()

module.exports = { registerPatientController, loginUserController, homeController }