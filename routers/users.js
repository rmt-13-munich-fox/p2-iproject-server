const UserController = require('../controllers/UserController')

const router = require('express').Router()

router.post('/admin/register', UserController.registerAdmin)
router.post('/client/register', UserController.registerClient)
router.post('/login', UserController.login)

module.exports = router