const Controller = require('../controllers/dahsboardController');
const routes = require('express').Router()
const { authentication } = require('../middlewares/auth'); 

routes.use(authentication)

routes.use('/:name' , Controller.getByName)

routes.use('/:name:date' , Controller.getByName)

routes.use('/:code' , Controller.getByCode)

module.exports = routes
