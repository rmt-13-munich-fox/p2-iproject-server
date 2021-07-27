const router = require('express').Router()
const ControllerCars = require('../controllers/contollerCar')

router.get('/', ControllerCars.fetchData)
router.get('/:id', ControllerCars.detailData)

module.exports = router