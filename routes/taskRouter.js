const router = require('express').Router()
const TaskController = require('../controllers/taskController')

router.post('/', TaskController.createTask)

module.exports = router