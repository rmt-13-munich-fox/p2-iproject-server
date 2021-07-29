const bcrypt = require('bcryptjs');
const hashPassword = (password) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    return hash
}

const comparePassword = (password, hashPassword) => {
    const isPassword = bcrypt.compareSync(password, hashPassword)
    return isPassword
}

module.exports = {
    hashPassword,
    comparePassword
}