const jwt = require("jsonwebtoken")

function createToken(data) {
    let token;
    return token = jwt.sign({id:data.id, email:data.email}, "sshhsh")
}

module.exports = createToken