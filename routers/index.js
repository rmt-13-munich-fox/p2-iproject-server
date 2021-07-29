const userRoutes = require('./routesUser');
const dahsboardRoutes = require('./routesDahsboard');
const router = require('express').Router();

router.use('/users', userRoutes);

router.use('/', dahsboardRoutes);


module.exports = router