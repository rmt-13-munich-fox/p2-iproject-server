const jwt = require('jsonwebtoken')


const getPayload = (token) =>{
  return jwt.verify(token,process.env.SECRET_KEY)
}


module.exports = getPayload