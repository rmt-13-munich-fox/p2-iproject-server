const router = require('express').Router()
const Controller = require('../controllers/story')
const {authentication} = require('../middlewares/auth')


// console.log('masuk sini', 222)

router.get('/stories', Controller.allStory)
router.get('/stories/:id', Controller.findStory)

// authentication
// router.use(authentication)

router.post('/stories',authentication, Controller.addStory)
router.put('/stories/:id', authentication,Controller.updateStory)
router.delete('/stories/:id', authentication,Controller.deleteStory)


module.exports = router