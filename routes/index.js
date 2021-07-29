const router = require('express').Router()
const Controller = require("../controller/controller")
const { authentication } = require('../midleware/auth')

router.post('/login', Controller.login)
router.get('/user', Controller.getUserLog)
router.post('/post', authentication, Controller.postMsg)
router.get('/chat', authentication, Controller.getChat)
router.delete('/logout', authentication, Controller.destroyAll)

module.exports = router