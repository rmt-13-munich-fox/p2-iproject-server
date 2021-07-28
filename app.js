const express = require('express');
const cors = require('cors');
const routes = require('./routes');
const errHandler = require('./middlewares/errorHandler');

const app = express()
const port = process.env.PORT || 3000

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())
app.use(routes)



app.use(errHandler)

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
})