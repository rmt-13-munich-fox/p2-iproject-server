const {
    Tag
} = require('../models/index')

class TagController {
    static async fetchAllTag(req, res, next) {
        try {
            const tags = await Tag.findAll()
            if (tags) {
                res.status(200).json(tags)
            } else {
                console.log('error');
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = TagController