const { Post } = require('../models');

class PostController {
    static async getAllPost(req, res, next) {
        try {
            const listPost = await Post.findAll({
                order: [['createdAt', 'DESC']]                
            })

            res.status(200).json(listPost)
        }
        catch (err) {
            next({
                name: 'ServerError',
                message: err.message || 'Internal server error'
            })
        }
    }

    static async getUserPost(req, res, next) {
        let userId = req.user.id

        try {
            const listMyPost = await Post.findAll({
                where: {
                    userId
                },
                order: [['createdAt', 'DESC']]
            })
            
            res.status(200).json(listMyPost)
        }
        catch (err) {
            next({
                name: 'ServerError',
                message: err.message || 'Internal server error'
            })            
        }
    }

    static async createPost(req, res, next) {
        try {
            const post = await Post.create({
                userId: req.user.id,
                imgUrl: req.body.imgUrl,
                title: req.body.title,
                description: req.body.description,                 
            })

            res.status(201).json(post)
        }
        catch (err) {
            next({
                name: 'ServerError',
                message: err.message || 'Internal server error'
            })               
        }
    }

    
}

module.exports = PostController