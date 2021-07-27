
const router = require('express').Router()
const country = require('./country')
const destination = require('./destination')
const plan = require('./plan')
const story = require('./story')
const travel = require('./travel')
const user = require('./user')
const { authentication } = require('../middlewares/auth')


// routing
// router.get('/', (req,res) => {
//     res.send('hello world')
// })

router.use('/', user)

router.use(authentication)

router.use('/', country)
router.use('/', destination)
router.use('/', story)
// router.use('/', travel)

// router.use('/', plan)


module.exports = router
