const express = require('express')
const router = require('./routes')
const app = express()
const cors = require("cors")
const PORT = 3000
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST"]
    }
  });

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", router)

io.on('connection', (socket) => {
    // console.log('someone connected');
    socket.on('newUser', (data => {
      // console.log(data);
      socket.broadcast.emit("newLogin", data)
      io.emit("updateUser")
    })) 
    socket.on("sendMessage", (data) => {
        // console.log(data, "ini data");
        // io.emit("broadcastMessage", data)
        socket.broadcast.emit("broadcastMessage", data)
    })
    socket.on("leaveUser", (data) => {
      socket.broadcast.emit("logoutUser", data)
      io.emit("updateUser")
    })
})

httpServer.listen(PORT, () => {
    console.log(`Applikasi berjalan di http://localhost:${PORT}`);
})