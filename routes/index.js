const router = require('express').Router();
const { authentication } = require('../middlewares/auth');
const Controller = require('../controllers/user');
const posts = require('./post');

router.get('/', (req, res) => {
    res.send('hello world')
})

router.post('/register', Controller.regis)
router.post('/login', Controller.login)

router.use(authentication)

router.use('/posts', posts)


module.exports = router