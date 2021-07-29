const { Subtask } = require('../models')

class SubtaskController {
  static createSubtask(req, res) {
    Subtask.create({
      TaskId: req.params.id,
      subtask: req.body.subtask
    })
      .then(subtask => {
        res.status(200).json(subtask)
      })
      .catch(err => {
        if (err.name === 'SequelizeUniqueConstraintError') {
          let error = [ err.errors[0].message ]

          res.status(400).json(error)
        } else if(err.name === 'SequelizeValidationError') {
          let errors = []

          err.errors.forEach(error => {
            errors.push(error.message)
          })

          res.status(400).json(errors)
        } else {
          res.status(500).json({ message: err.message })
        }
      })
  }
  static deleteSubtask(req, res) {
    Subtask.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(_ => {
        res.status(200).json({ message: 'Subtask deleted' })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }
}

module.exports = SubtaskController