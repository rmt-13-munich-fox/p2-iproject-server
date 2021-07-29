const {
    Bookmark,
    Post,
    Tag
} = require('../models/index')

class BookmarkController {
    static async addBookmark(req, res, next) {
        try {
            console.log('masuk ke controller');
            const {
                id
            } = req.user
            const {
                postId
            } = req.body
            const createdBookmark = {
                userId: id,
                postId: +postId
            }

            console.log(createdBookmark);
            const bookmarks = await Bookmark.create(createdBookmark)
            if (bookmarks) {
                res.status(200).json({
                    message: 'Bookmark is success'
                })
            } else {
                next({
                    name: "internalServerError",
                })
            }
        } catch (error) {
            console.log(error);
            // next({
            //     name: "internalServerError",
            // })
        }
    }

    static async deleteBookmark(req, res, next) {
        try {
            const id = Number(req.params.id)

            const bookmarks = await Bookmark.destroy({
                where: {
                    id
                }
            })

            if (bookmarks) {
                res.status(200).json({
                    message: 'Bookmark is deleted'
                })
            } else {
                next({
                    name: "internalServerError"
                })
            }

        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }

    static async fetchBookmarks(req, res, next) {
        try {
            const {
                id: userId
            } = req.user
            console.log(userId);
            const bookmarks = await Bookmark.findAll({
                where: {
                    userId
                },
                include: [{
                    model: Post
                }]
            })
            if (bookmarks) {
                res.status(200).json(bookmarks)
            } else {
                next({
                    name: "internalServerError"
                })
            }
        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }
}

module.exports = BookmarkController