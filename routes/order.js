const router = require('express').Router();
const ControllerOrder = require('../controllers/ControllerOrder')

router.post('/', ControllerOrder.post)
router.get('/:orderid', ControllerOrder.allOrder)


module.exports = router
