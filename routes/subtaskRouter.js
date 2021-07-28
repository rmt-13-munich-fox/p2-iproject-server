const router = require('express').Router()
const SubtaskController = require('../controllers/subtaskController')

router.post('/:id', SubtaskController.createSubtask)
router.delete('/:id', SubtaskController.deleteSubtask)

module.exports = router