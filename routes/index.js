const router = require('express').Router()
const admin = require('./admin.js')
const menu = require('./menu.js')
const order = require('./order.js')
const ordermenu = require('./ordermenu.js')

router.use('/menus', menu)
router.use('/', admin)
router.use('/orders', order)
router.use('/neworder', ordermenu)


module.exports = router