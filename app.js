const express = require('express')
const router = require('./routes')
const app = express()
const cors = require("cors")
const PORT = process.env.PORT || 3000
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer, {
    cors: {
      origin: "*",
      methods: ["GET", "POST", "DELETE"]
    }
  });

app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use("/", router)

io.on('connection', (socket) => {
    // console.log('someone connected');
    socket.on('newUser', (data, room) => {
      console.log(data);
      socket.to(room).emit("newLogin", data)
      io.emit("updateUser")
    }) 
    socket.on("sendMessage", (data, room) => {
        // console.log(data, "ini data");
        // io.emit("broadcastMessage", data)
        socket.to(room).emit("broadcastMessage", data)
    })
    socket.on("leaveUser", (data, room) => {
      socket.to(room).emit("logoutUser", data)
      io.emit("updateUser")
    })

    socket.on("joinRoom", (room) => {
      // console.log(`User has joined ${room}`);
      socket.join(room)
    })
})

httpServer.listen(PORT, () => {
    console.log(`Applikasi berjalan di http://localhost:${PORT}`);
})