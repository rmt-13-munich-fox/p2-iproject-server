const router = require('express').Router()
const ControllerSocket = require('../controllers/contollerSocket')

router.get('/message', ControllerSocket.fetchDataMessage)
router.get('/log', ControllerSocket.fetchDataLog)


module.exports = router