const router = require('express').Router()
const sign = require('./sign')
const cars = require('./cars')
const authentication = require('../middleware/authentication')
const favorites = require('./favorites')

router.use('/', sign)
router.use(authentication)
router.use('/cars', cars)
router.use('/favorites', favorites)

module.exports = router

