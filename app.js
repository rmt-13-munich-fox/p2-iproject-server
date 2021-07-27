require("dotenv").config();
const express = require("express");
const app = express();
const routers = require("./routers");
const port = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(routers);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});
