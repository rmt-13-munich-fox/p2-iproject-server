const jwt = require('jsonwebtoken')

const generateToken = (payload) => {
  return jwt.sign(payload, process.env.JWT_TOKEN)
}

const validateToken = (token) => {
  return jwt.verify(token, process.env.JWT_TOKEN)
}

module.exports = { generateToken, validateToken }