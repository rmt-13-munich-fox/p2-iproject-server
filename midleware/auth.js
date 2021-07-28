const jwt = require("jsonwebtoken")
const { User } = require("../models/index")

function authentication(req, res, next) {
    const { access_token } = req.headers
    // console.log(access_token, "<<<<<");
    if(access_token) {
        const user = jwt.verify(access_token, "sshhsh")
        User.findByPk(user.id)
        .then((data) => {
            if(data) {
                req.user = {id: data.id, username: data.username}
                next()
            } else {
                res.status(400).json({msg: "Data not Found"})
            }
        })
        .catch((err) => {
            res.status(400).json(err)
        })
    } else {
        res.status(400).json({msg: "Authentication Error"})
    }
}

module.exports = { authentication }