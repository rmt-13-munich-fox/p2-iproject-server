
const router = require('express').Router()
const country = require('./country')
const plan = require('./plan')
const story = require('./story')
const travel = require('./travel')
const user = require('./user')
const Controller = require('../controllers/controllerCurrency')


router.post('/currency', Controller.currencyConvert)
router.get('/currency/list', Controller.allCurrency)

router.use('/', user)
// console.log('masuk sini', 111)
router.use('/', country)
router.use('/', story)
router.use('/', travel)
router.use('/', plan)



module.exports = router
