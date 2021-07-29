const router = require('express').Router()
const Controller = require('../controllers/plan')
const {authentication} =require('../middlewares/auth')


router.get('/plans/:travel_id', Controller.allPlan)

// authentication
// router.use(authentication)

router.post('/plans', Controller.addPlan)
router.put('/plans/:id', Controller.updatePlan)
router.delete('/plan/:id', Controller.deletePlan)




module.exports = router