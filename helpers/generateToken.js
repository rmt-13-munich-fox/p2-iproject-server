const jwt = require('jsonwebtoken')

const signUser = (id,email) =>{
  let access_token = jwt.sign({id,email},process.env.SECRET_KEY,{expiresIn : 60*60})
  return access_token
}

module.exports = signUser