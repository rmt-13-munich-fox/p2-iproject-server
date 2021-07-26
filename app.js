require('dotenv').config()
const routes = require('./routes')
const express = require('express')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3000

app.use(express.urlencoded({extended:true}))
app.use(cors())

app.use(routes)
app.use(errorHandler)


app.listen(port,()=>{
  console.log('Server running at port',port)
})
