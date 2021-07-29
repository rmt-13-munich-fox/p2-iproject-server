const router = require('express').Router();
const ControllerOrderMenus = require('../controllers/ControllerOrderMenus')

router.post('/ordercustomer', ControllerOrderMenus.postFood)
router.post('/currency', ControllerOrderMenus.handleCurrency)
router.post('/generate/:menuid', ControllerOrderMenus.addToCart)
router.delete('/generate/:menuid', ControllerOrderMenus.deleteFood)


module.exports = router
