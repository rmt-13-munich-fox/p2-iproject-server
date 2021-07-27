

require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const router = require('./router')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')


app.use(express.urlencoded({ extended:true }))
app.use(express.json())
app.use(cors())

app.use(router)


// error handler

app.use(errorHandler)




app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})