const router = require('express').Router();
const ControllerAdmin = require('../controllers/ControllerAdmin')

router.get('/register', ControllerAdmin.register)
router.post('/login', ControllerAdmin.login)

module.exports = router
