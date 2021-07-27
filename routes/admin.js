const router = require('express').Router();
const ControllerAdmin = require('../controllers/ControllerAdmin')
const {authentication} = require('../middlewares/auth')

router.get('/register', ControllerAdmin.register)
router.post('/login', ControllerAdmin.login)
router.use(authentication)

module.exports = router
