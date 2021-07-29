require("dotenv").config();
const cors = require("cors");
const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const httpServer = require("http").createServer(app);
const io = require("socket.io")(httpServer);
const routes = require("./routes/index");
const { errorHandler } = require("./middlewares/errorHandler");

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

io.on("connection", (socket) => {
  console.log("userconnected");
  socket.on("sendMessage", (data) => {
    console.log(data, "KIWKIWKIW");
    io.emit("broadcastMsg", data);
  });
});

app.use(routes);

app.use(errorHandler);

// app.listen(port, () => {
// console.log(`Rocking at http://localhost:${port}`);
// });
httpServer.listen(port, () => {
  console.log(`Rocking at http://localhost:${port}`);
});
