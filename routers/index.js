const router = require('express').Router()
const mainController = require('../controllers/mainController')

router.post('/register', mainController.register)
router.post('/login', mainController.login)
module.exports= router