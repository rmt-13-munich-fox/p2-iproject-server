const jwt = require('jsonwebtoken')

function generateToken(payload) {
    console.log(payload, 'ini payload');
    let access_token = jwt.sign(payload, process.env.SECRET_KEY)
    return access_token
}

module.exports = {generateToken}