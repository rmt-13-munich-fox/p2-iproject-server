const { Post } = require('../models');

class PostController {
    static getAllPost(req, res, next) {
        res.status(200).json({
            pesan: 'Ini masuk get all post'
        })
    }
}

module.exports = PostController