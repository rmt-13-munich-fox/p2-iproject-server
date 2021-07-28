const router = require('express').Router();
const Controller = require('../controllers/post');

router.get('/', Controller.getAllPost)

module.exports = router