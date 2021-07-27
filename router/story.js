const router = require('express').Router()
const Controller = require('../controllers/story')


router.get('/stories/travels/:id', Controller.allStoryByTravelId)
router.get('/stories/destinations/:id', Controller.allStoryByDestId)
router.post('/stories', Controller.addStory)
router.put('/stories/:id', Controller.updateDescriptions)
router.delete('/stories/:id', Controller.deleteStory)


module.exports = router