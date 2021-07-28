const {
    getPagination,
    getPagingData
} = require('../helpers/pagination')
const {
    Post,
    Tag
} = require('../models/index')
class PostController {
    static async createBlogPost(req, res, next) {
        try {
            const {
                id: userId
            } = req.user

            const {
                title,
                description,
                thumbnail,
                tagId
            } = req.body

            const createdArticle = {
                title,
                description,
                thumbnail,
                tagId: +tagId,
                userId
            }

            const newPost = await Post.create(createdArticle, {
                include: [{
                    model: Tag
                }]
            })
            res.status(201).json(newPost)

        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }

    static async editBlogPost(req, res, next) {
        try {
            const {
                id: userId
            } = req.user
            const id = Number(req.params.articleId)

            const {
                title,
                description,
                thumbnail,
                tagId
            } = req.body

            const editedArticle = {
                title,
                description,
                thumbnail,
                tagId: +tagId,
                userId
            }

            const editedPost = await Post.update(editedArticle, {
                where: {
                    id
                },
                returning: true
            })

            const tag = await Tag.findByPk(+tagId)
            editedPost[1][0].dataValues.tag = tag
            res.status(200).json(editedPost[1][0])

        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }

    static async deleteBlogPost(req, res, next) {
        try {
            const id = Number(req.params.articleId)
            await Post.destroy({
                where: {
                    id
                }
            })
            res.status(200).json({
                message: 'success deleting post'
            })
        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }

    static async fetchOneArticle(req, res, next) {
        try {
            const id = Number(req.params.articleId)
            const post = await Post.findByPk(id, {
                include: [{
                    model: Tag
                }]
            })
            if (post) {
                res.status(200).json(post)
            } else {
                next({
                    name: "notFound",
                    message: "article"
                })
            }
        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }

    static async fetchAllArticle(req, res, next) {
        try {
            const {
                page,
                tagId
            } = req.query;

            const {
                offset,
                limit
            } = getPagination(page);

            let condition = {}

            if (tagId) {
                condition.tagId = +tagId
            }

            const postsPerPage = await Post.findAndCountAll({
                where: condition,
                include: [{
                    model: Tag
                }],
                limit,
                offset
            })

            if (postsPerPage) {
                const response = getPagingData(postsPerPage, page, limit);
                res.status(200).json(response)
            } else {
                next({
                    name: "notFound",
                    message: "articles"
                })
            }
        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }
}

module.exports = PostController