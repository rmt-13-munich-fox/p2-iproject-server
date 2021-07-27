const { validateToken } = require('../helpers/jwt')
const { User } = require('../models')

const authentication = (req, res, next) => {
  const access_token = req.headers.access_token

  if (access_token) {
    try {
      const payload = validateToken(access_token)

      User.findByPk(payload.id)
        .then(user => {
          if (user) {
            req.user = { id: user.id }
            next()
          }
        })
        .catch(err => {

        })
    } catch (err) {

    }
  } else {

  }
}

module.exports = { authentication }