const router = require('express').Router()
const ControllerFavorite = require('../controllers/controllerFavorite')

router.get('/', ControllerFavorite.fetchData)
router.post('/', ControllerFavorite.addFavorite)
router.delete('/:id', ControllerFavorite.removeFavorite)

module.exports = router