const router = require('express').Router();
const ControllerOrderMenus = require('../controllers/ControllerOrderMenus')

router.post('/:menuid', ControllerOrderMenus.addToCart)


module.exports = router
