const router = require('express').Router()
const FavoriteController = require('../controllers/favoriteController')

router.get('/',FavoriteController.showAll)
router.post('/add',FavoriteController.addFavorite)
router.delete('/:id',FavoriteController.deleteFavorite)

module.exports = router 