const router = require('express').Router()
const ControllerSign = require('../controllers/controllerSign')
const upload = require('../helper/multer')
const authentication = require('../middleware/authentication')

router.post('/register',upload.single("image"), ControllerSign.signUp)
router.post('/login', ControllerSign.login)
router.use(authentication)
router.get('/user', ControllerSign.fetchUser)
router.put('/user/:id', upload.single("image"), ControllerSign.editUser)

module.exports = router