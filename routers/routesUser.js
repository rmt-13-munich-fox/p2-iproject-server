const Controller = require('../controllers/userController');
const routes = require('express').Router();

routes.post('/register', Controller.register)

routes.post('/login', Controller.login)

routes.post('/login/facebook', Controller.oAuth)



module.exports = routes