const router = require('express').Router()
const Controller = require('../controllers/travel')
const {authentication} = require('../middlewares/auth')


router.get('/travels', Controller.allTravel)
router.get('/travels/:id', Controller.findTravel)

// authentication
// router.use(authentication)

router.post('/travels', Controller.addTravel)
router.put('/travels/:id', Controller.updateTravel)
router.delete('/travels/:id', Controller.deleteTravel)




module.exports = router