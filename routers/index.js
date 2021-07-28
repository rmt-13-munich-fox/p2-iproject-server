const router = require('express').Router()
const mainController = require('../controllers/mainController')
const uploadImage = require('../helper/imagekit')
const upload = require('../middlewares/multer')


router.post('/register', mainController.register)
router.post('/login', mainController.login)
router.get('/getmarmut', mainController.getMarmut)
router.post('/addmarmut', upload.single('image'), mainController.postMarmut)
module.exports= router