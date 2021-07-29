const router = require('express').Router()
const sign = require('./sign')
const cars = require('./cars')
const authentication = require('../middleware/authentication')
const favorites = require('./favorites')
const socket = require('./socket')

router.use('/', sign)
router.use(authentication)
router.use('/cars', cars)
router.use('/favorites', favorites)
router.use('/socket', socket)

module.exports = router

