const Controller = require('../controllers/dahsboardController');
const routes = require('express').Router()
const { authentication } = require('../middlewares/auth'); 

routes.use(authentication)

routes.use('/nations/:name' , Controller.getByName)

routes.use('/date' , Controller.getByNameAndDate)

routes.use('/code/:code' , Controller.getByCode)

module.exports = routes
