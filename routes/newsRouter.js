const router = require('express').Router()
const news = require('../middlewares/newsAPI')

router.get('/', news)

module.exports = router