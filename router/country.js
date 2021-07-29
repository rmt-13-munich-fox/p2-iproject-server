
const router = require('express').Router()
const Controller = require('../controllers/country')
const {authentication} = require('../middlewares/auth')


router.get('/countries', Controller.allCountries)

// authentication
// router.use(authentication)

router.post('/countries', Controller.addCountry)
router.delete('/countries/:id', Controller.deleteCountry)


module.exports = router