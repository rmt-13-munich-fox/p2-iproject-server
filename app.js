const express = require('express')
const app = express()
const port = 3000
const router = require('./routers')
const mainRouter = require ('./routers/index')

app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.use(router)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})