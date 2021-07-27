const router = require('express').Router()
const ControllerSign = require('../controllers/controllerSign')
const upload = require('../helper/multer')

router.post('/register',upload.single("image"), ControllerSign.signUp)
router.post('/login', ControllerSign.login)
router.put('/:id', upload.single("image"), ControllerSign.editUser)

module.exports = router