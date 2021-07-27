const jwt = require('jsonwebtoken')
const {Admin} = require('../models/index')

function authentication(req, res, next) {
    const {access_token} = req.headers
    if (access_token) {
        try {
            const payload = jwt.verify(access_token, process.env.SECRET_KEY)
            Admin.findByPk(payload.id)
                .then(admin => {
                    if (admin) {
                        req.admin = {id: admin.id}
                        next()
                    } else {
                        res.status(401).json({error: "authentication failed"})
                    }
                })
        } catch (error) {
            res.status(401).json({error: "authentication failed"})
        }
    } else {
        res.status(401).json({error: "you must login first"})
    }
}

module.exports = {
    authentication
}