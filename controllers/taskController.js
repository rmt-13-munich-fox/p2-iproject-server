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

      })
  }
}

module.exports = TaskController