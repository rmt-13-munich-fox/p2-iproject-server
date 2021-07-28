const {
    jwtVerify
} = require('../helpers/jwt')
const {
    Post,
    Bookmark
} = require('../models/index')

const authentication = (req, res, next) => {
    const {
        access_token
    } = req.headers
    if (access_token) {
        try {
            const payload = jwtVerify(access_token)
            if (payload) {
                req.user = {
                    id: payload.id,
                    email: payload.email,
                    role: payload.role,
                    username: payload.username
                }
                next()
            }
        } catch (error) {
            next({
                name: "invalidToken"
            })
        }
    } else {
        next({
            name: "notLoggedIn"
        })
    }
}

const adminAuthorization = (req, res, next) => {
    const {
        role,
    } = req.user

    if (role === 'admin') {
        next()
    } else {
        next({
            name: "notAuthorized"
        })
    }
}

const modifyArticleAuthorization = async (req, res, next) => {
    const articleId = Number(req.params.articleId)
    try {
        const {
            id: userId
        } = req.user
        const article = await Post.findByPk(articleId)
        if (article) {
            if (article.userId === userId) {
                next()
            } else {
                next({
                    name: "notAuthorized"
                })
            }
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

const clientAuthorization = (req, res, next) => {
    const {
        role
    } = req.user
    if (role === 'client') {
        next()
    } else {
        next({
            name: "notAuthorized"
        })
    }
}

const removeBookmarkAuthorization = async (req, res, next) => {
    const id = Number(req.params.id)
    try {
        const bookmark = await Bookmark.findAll()
        console.log(bookmark[0].userId);
    } catch (error) {
        console.log(error);
    }
}

module.exports = {
    authentication,
    adminAuthorization,
    modifyArticleAuthorization,
    clientAuthorization,
    removeBookmarkAuthorization
}