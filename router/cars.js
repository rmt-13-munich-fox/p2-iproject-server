const router = require('express').Router()
const ControllerCars = require('../controllers/contollerCar')

router.get('/', ControllerCars.fetchData)

module.exports = router