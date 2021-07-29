var bcrypt = require('bcryptjs');

const hash = (password) => {
  var salt = bcrypt.genSaltSync(10);
  return bcrypt.hashSync(password, salt);
}

const decode = (password, dbPassword) => {
  return bcrypt.compareSync(password, dbPassword);
}

module.exports = {
  hash,
  decode
}