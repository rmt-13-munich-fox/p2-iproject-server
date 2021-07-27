
const router = require('express').Router()
const Controller = require('../controllers/country')


router.get('/countries', Controller.allCountries)
router.post('/countries', Controller.addCountry)
router.delete('/countries/:id', Controller.deleteCountry)


module.exports = router