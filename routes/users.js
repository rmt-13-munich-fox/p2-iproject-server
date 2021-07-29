const router = require('express').Router()
const UserController = require('../controllers/userController')

router.get('/',(req,res) => {
  res.send('Hello World')
})
router.post('/register',UserController.register)
router.post('/login',UserController.login)
router.post('/glogin',UserController.gLogin)

module.exports = router 