require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.port;
const cors = require('cors');
const routes = require('./routers');

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.use(routes);

app.listen(port, () => console.log(`Server listen on port ${port}`))