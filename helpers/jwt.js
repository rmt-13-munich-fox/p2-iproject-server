const jwt = require('jsonwebtoken');

const signJWT = (user) => jwt.sign(user, process.env.JWT_SECRET)

const verifyJWT = (token) => jwt.verify(token, process.env.JWT_SECRET)

module.exports = {
    signJWT,
    verifyJWT
}