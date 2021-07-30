const router = require('express').Router()
const userRouter = require('./userRouter')
const taskRouter = require('./taskRouter')
const subtaskRouter = require('./subtaskRouter')
const newsRouter = require('./newsRouter')
const gSearchRouter = require('./gSearchRouter.js')
const { authentication } = require('../middlewares/auth')

router.use('/', userRouter)
router.use('/gSearch', gSearchRouter)
router.use(authentication)
router.use('/news', newsRouter)
router.use('/tasks', taskRouter)
router.use('/subtasks', subtaskRouter)

module.exports = router