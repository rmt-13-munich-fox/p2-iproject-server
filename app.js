"use strict"
require('dotenv').config()
const express = require('express')
const routers = require('./routes')
const errorHandler = require('./middlewares/errorHandler')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3300


app.use(cors())
app.use(express.urlencoded({extended : true}))
app.use(express.json())
app.get('/', (req,res)=>{
    res.status(200).json({msg:"server running"})
})
app.use('/',routers)
app.use(errorHandler)


app.listen(port, function(){
    console.log('running '+ port);
})  