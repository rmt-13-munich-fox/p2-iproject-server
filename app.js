require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.port;
const httpServer = require("http").createServer(app);
const cors = require('cors');
const routes = require('./routers');
const io = require("socket.io")(httpServer);

io.on("connection", (socket) => {
  console.log('user Connected')
  socket.on('sendMessage', (data) => {

    io.emit('broadcastMessage', data)
  })
})

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(routes);

httpServer.listen(port, () => console.log(`Server listen on port ${port}`))