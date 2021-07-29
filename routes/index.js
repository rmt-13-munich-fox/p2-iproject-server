"use strict"

const routers = require('express').Router();
const favoritesRouters = require('./favorites')
const userRouters = require('./users')
const recipesRouters = require('./recipes')

routers.use('/users', userRouters);
routers.use('/favorites', favoritesRouters);
routers.use('/recipes', recipesRouters);

module.exports = routers