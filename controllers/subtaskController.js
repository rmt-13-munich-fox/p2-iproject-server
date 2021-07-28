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
        res.status(500).json({ message: err.message })
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
  }
}

module.exports = SubtaskController