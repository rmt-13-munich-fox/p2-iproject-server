const { Task } = require('../models')

class TaskController {
  static createTask (req, res) {
    Task.create({
      name: req.body.name,
      task: req.body.task
    })
      .then(task => {
        res.status(201).json(task)
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
  static deleteTask (req, res) {
    Task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(_=> {
        res.status(200).json({ message: 'Task deleted' })
      })
      .catch(err => {
        res.status(500).json({ message: err.message })
      })
  }
}

module.exports = TaskController