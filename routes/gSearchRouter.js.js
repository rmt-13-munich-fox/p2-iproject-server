const router = require('express').Router()
const search = require('../middlewares/googleSearchAPI')

router.get('/', search)

module.exports = router