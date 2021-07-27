const router = require('express').Router()
const sign = require('./sign')

router.use('/', sign)


module.exports = router

