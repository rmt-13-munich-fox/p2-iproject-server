const router = require('express').Router()
const users = require('./users')
const bookmark = require('./bookmarks')
const posts = require('./posts')
const TagController = require('../controllers/TagController')
const errorHandler = require('../middlewares/errorHandlers')

router.use('/', users)
router.use('/posts', posts)
router.use('/bookmarks', bookmark)
router.get('/tags', TagController.fetchAllTag)
router.user(errorHandler)

module.exports = router