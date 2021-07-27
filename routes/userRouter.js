const router = require('express').Router();
const Controller = require('../controllers/userController')
const {multerMiddleware} = require('../middlewares/multer')
const {postImage} = require('../middlewares/uploadImage')

router.post('/login',Controller.login)
router.post('/reset-password/:email',Controller.resetPassword)
router.post('/register',multerMiddleware,postImage,Controller.register)


module.exports = router