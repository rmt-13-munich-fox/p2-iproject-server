const BookmarkController = require('../controllers/BookmarkController')
const {
    clientAuthorization,
    authentication,
    removeBookmarkAuthorization
} = require('../middlewares/auth')

const router = require('express').Router()

router.use(authentication)
router.use(clientAuthorization)
router.get('/', BookmarkController.fetchBookmarks)
router.post('/', BookmarkController.addBookmark)
router.delete('/:id', removeBookmarkAuthorization, BookmarkController.deleteBookmark)


module.exports = router