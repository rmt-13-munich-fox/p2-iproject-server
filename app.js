const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const http = require('http');
const server = http.createServer(app);
const router = require('./router')
const {Log, Message} = require('./models')

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

io.on('connection', (socket) => {
  console.log('a user connected');
  socket.on('sendMessage', (data) => {
    console.log(data);
    socket.broadcast.emit('broadcast', data)
    
  })

  socket.on('Login', (user) => {
    console.log(user);
    io.emit('user', user)
  })
});

app.use(router)
server.listen(port, () => {
  console.log('listening on *:' + port);
});
