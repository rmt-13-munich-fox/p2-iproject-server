const bycrpt = require('bcryptjs')
const salt = bycrpt.genSaltSync(8)

const hashPassword = (password) =>{
  return bycrpt.hashSync(password,salt)
}


module.exports = hashPassword