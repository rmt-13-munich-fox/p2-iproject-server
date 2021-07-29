const router = require('express').Router();
const multer = require('multer');
const { uploadToImgBB } = require('../middlewares/uploadToImgBB');
const Controller = require('../controllers/post');

const upload = multer()

router.get('/', Controller.getAllPost)
router.get('/myPost', Controller.getUserPost)
router.post('/', upload.single('post-image'), uploadToImgBB, Controller.createPost)

module.exports = router