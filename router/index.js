
const router = require('express').Router()
const country = require('./country')
const plan = require('./plan')
const story = require('./story')
const travel = require('./travel')
const user = require('./user')



router.use('/', user)
// console.log('masuk sini', 111)
router.use('/', country)
router.use('/', story)
router.use('/', travel)
router.use('/', plan)



module.exports = router
