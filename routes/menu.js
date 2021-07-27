const router = require('express').Router();
const ControllerMenu = require('../controllers/ControllerMenu')

router.get('/', ControllerMenu.list)
router.get('/:id', ControllerMenu.findById)


module.exports = router
