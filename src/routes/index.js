var express = require('express');
const { registerPatientController, loginUserController, homeController } = require('../controllers');
var router = express.Router();

// GET Login
router.get('/login', loginUserController.index)

// POST Login
router.post('/login', loginUserController.login)

// GET home
router.get('/home', homeController.index)

/* GET home page. */
router.get('/register', registerPatientController.index);

/* POST register page. */
router.post('/register', registerPatientController.register)

module.exports = router;
