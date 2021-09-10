const router = require('express').Router()
const multer = require('multer')
const PostController = require('../controllers/PostController')
const {
    authentication,
    adminAuthorization,
    modifyArticleAuthorization
} = require('../middlewares/auth')
const upload = multer({
    storage: multer.memoryStorage()
})
const uploadImageKit = require('../middlewares/uploadImageKit')

router.get('/', PostController.fetchAllArticle)
router.get('/:articleId', PostController.fetchOneArticle)

router.use(authentication)
// authorization admin
router.use(adminAuthorization)
router.post('/', upload.single('thumbnail'), uploadImageKit, PostController.createBlogPost)
router.use('/:articleId', modifyArticleAuthorization)
router.put('/:articleId', upload.single('thumbnail'), uploadImageKit, PostController.editBlogPost)
router.delete('/:articleId', PostController.deleteBlogPost)

module.exports = router