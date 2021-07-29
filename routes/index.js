const router = require('express').Router();
const userRouter = require('./userRouter')
const newsRouter = require('./newsRouter')

router.use('/',userRouter)
router.use('/news',newsRouter)

module.exports = router