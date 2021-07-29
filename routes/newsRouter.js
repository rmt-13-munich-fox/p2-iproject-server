const router = require('express').Router();
const Controller = require('../controllers/newsController')
const {authentification} = require('../middlewares/auth')
const job = require('../helpers/cronJob')

// TODO Optimize time for cron job
job.start() 

router.get('/latest-news',Controller.getLatestNews)
router.get('/latest-news/all',Controller.getAllLatestNews)
router.post('/keywords',Controller.searchKeywords)
router.post('/sentiment-analysis',Controller.sentimentAnalyze)
router.use(authentification)
router.get('/bookmark',Controller.getBookmarks)
router.post('/bookmark/:id',Controller.addBookmark)
// Authorization
router.delete('/bookmark/:id',Controller.deleteBookmark)

module.exports = router