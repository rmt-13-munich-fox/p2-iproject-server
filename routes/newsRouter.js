const router = require('express').Router();
const Controller = require('../controllers/newsController')
const {authentification} = require('../middlewares/auth')
const job = require('../helpers/cronJob')

// job.start()
router.use(authentification)
router.get('/latest-news',Controller.getLatestNews)
router.get('/keywords/:keywords',Controller.searchKeywords)
router.get('/bookmark',Controller.getBookmarks)
router.post('/bookmark/:id',Controller.addBookmark)
// Authorization
router.delete('/bookmark/:id',Controller.deleteBookmark)

module.exports = router