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
    console.log('someone connected');
    socket.on("sendMessage", (data) => {
        console.log(data, "ini data");
    })
})

httpServer.listen(PORT, () => {
    console.log(`Applikasi berjalan di http://localhost:${PORT}`);
})