const router = require('express').Router()
const TaskController = require('../controllers/taskController')

router.post('/', TaskController.createTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router