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
  static deleteTask (req, res) {
    Task.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(_=> {
        res.status(200).json({ message: 'Task deleted' })
      })
  }
}

module.exports = TaskController