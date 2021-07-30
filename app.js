if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const cors = require('cors')
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)
const { Task, Subtask, MyTask } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())
io.on('connection', (socket) => {
  socket.on('fetchTasks', () => {
    Task.findAll()
      .then(tasks => {
        io.emit('tasks', tasks)
      })
  })
  socket.on('fetchSubtasks', () => {
    Subtask.findAll()
      .then(subtasks => {
        io.emit('subtasks', subtasks)
      })
  })
  socket.on('deleteSubtask', (id) => {
    Subtask.destroy({
      where: {
        id
      }
    })
      .then(_ => {
        return Subtask.findAll()
      })
      .then(subtasks => {
        io.emit('subtasks', subtasks)
      })
  })
  socket.on('deleteTask', (id) => {
    Subtask.destroy({
      truncate: true
    })
      .then(_ => {
        console.log('<<<<<<<< MASUK KE NGIRIM DATA TASK')
        return Task.destroy({
          where: {
            id
          }
        })
      })
      .then(tasks => {
        io.emit('tasks', tasks)
      })
  })
})
app.use(router)

httpServer.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = io