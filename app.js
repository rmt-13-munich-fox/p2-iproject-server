require('dotenv').config()
const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const http = require('http');
const server = http.createServer(app);
const router = require('./router')
const {Log, Message, User} = require('./models')

const io = require("socket.io")(server, {
  cors: {
    origin: 'http://localhost:8080',
    methods: ['GET', 'POST']
  }
})

const cors = require('cors')


app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// app.get('/', (req, res) => {
//   res.sendFile(__dirname + '/index.html');
// });
app.use(router)

io.on('connection', async (socket) => {
  console.log('a user connected');
  socket.on('sendMessage', async (data) => {
    console.log(data);
      const UserId = data.id
      const message = data.message
      await Message.create({UserId, message})
      const response = await Message.findAll()
    io.emit('broadcast', response)
  })

  socket.on('Login', async (user) => {
    console.log(user);
    try {
      const UserId = user.id
      const status = user.status
      const data = Log.findByOne({
        where: {UserId}
      })
      if(data){
        const id = data.id
        await Log.update({status}, {where: {id}})
      }else{
        await Log.create({UserId, status})
      }
    } catch (err) {
      console.log(err);
    }
    io.emit('user', user)
  })
});


server.listen(port, () => {
  console.log('listening on *:' + port);
});
