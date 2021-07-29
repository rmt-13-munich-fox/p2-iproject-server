const router = require('express').Router()
const RecipeController = require('../controllers/recipeController')

router.get('/',RecipeController.showAll)
router.get('/:word',RecipeController.showByWord)
router.post('/',RecipeController.setRecipe)

module.exports = router 