const router = require('express').Router();
const Controller = require('../controllers/newsController')
const {authentification} = require('../middlewares/auth')
const job = require('../helpers/cronJob')

// job.start()
router.use(authentification)
router.get('/latest-news',Controller.getLatestNews)
router.get('/keywords/:keywords',Controller.searchKeywords)



module.exports = router