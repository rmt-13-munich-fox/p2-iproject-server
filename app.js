if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)
const { Task } = require('./models')

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
io.on('connection', (socket) => {
  socket.on('fetchTasks', () => {
    Task.findAll()
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