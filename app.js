require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const routers = require('./routers/index')

app.use(cors())
app.use(express.urlencoded({
    extended: true
}))
app.use(express.json())
app.use(routers)

module.exports = app