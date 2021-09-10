const jwt = require('jsonwebtoken');

const jwtSign = (id, email, role, username) => {
    return jwt.sign({
        exp: Math.floor(Date.now() / 1000) + (60 * 60),
        id,
        email,
        role,
        username
    }, process.env.SECRET_CODE);
}

const jwtVerify = (access_token) => {
    return jwt.verify(access_token, process.env.SECRET_CODE)
}

module.exports = {
    jwtSign,
    jwtVerify
}