const router = require('express').Router()
const Controller = require('../controllers/destination')

router.get('/destinations', Controller.allDestination)
router.post('/destinations', Controller.addDestination)
router.patch('/destinations/:id', Controller.patchDescriptions)
router.delete('/destinations/:id', Controller.deleteDestination)



module.exports = router