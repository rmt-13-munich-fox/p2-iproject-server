if (process.env.NODE_ENV !== "production") {
  require('dotenv').config()
}
const express = require('express')
const app = express()
const port = 3000
const router = require('./routes')
const httpServer = require('http').createServer(app)
const io = require('socket.io')(httpServer)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(router)
io.on('connection', (socket) => {
  console.log('user connected');
})

httpServer.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = io