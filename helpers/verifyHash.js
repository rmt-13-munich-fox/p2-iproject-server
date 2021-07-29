const bcrypt = require('bcryptjs')

const hashCompare = (plainPass,hashedPass) =>{
  if(bcrypt.compareSync(plainPass,hashedPass)) return true
  else return false
}

module.exports = hashCompare