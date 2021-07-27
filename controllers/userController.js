const { User } = require('../models')

class UserController {
  static register (req, res) {
    User.create({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    })
      .then(user => {
        res.status(200).json({ id: user.id, username: user.username, email: user.email })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }
}

module.exports = UserController