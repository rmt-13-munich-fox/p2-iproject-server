const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const router = require('./routers')
const request = require('request')
const mainRouter = require ('./routers/index')
const cors = require('cors')
const http = require('http').createServer(app);
const {User} = require('./models')
// const server = http.createServer(app);
let io = require('socket.io')(http, {
    cors: {
        origin: "https://ayahmarmut.web.app",
        methods: ["GET", "POST"]
    }
}) 


app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html')
})

// app.post('/recaptcha', (req, res) => {
// 	if(req.body.captcha === undefined || req.body.captcha === '' || req.body.captcha === null){
// 		return res.json({"success": false, "msg": "Please select a captcha"})
// 	}

// 	const secretKey = '6LdTeMUbAAAAAIx4LO0o3MT7ZrDGTKttVGrb7KE1'
// 	const verifyUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${req.body.captcha}&remoteip=${req.connection.remoteAddress}`

// 	request(verifyUrl, (err,response,body) => {
// 		body= JSON.parse(body)
// 		if(body.success !== undefined && !body.success){
// 			return res.json({"success": false, "msg": "Failed captcha verification"})
// 		}
// 		return res.json({"success": true, "msg": "Captcha verification successful"})
// 	})
// })


app.use(router)

http.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

let users= []

io.on('connection', (socket) => {
	console.log('connection established')
	socket.on('disconnect', () => {
		console.log('Disconnected')
	})
	socket.on('sendMessage', (data) => {
		// console.log(data , 'ini data di server')
		io.emit('broadcastMessage', data)
	})

	socket.on('loginUser', (user) => {
		users.push(user)
		console.log(users)
		io.emit('sendUser', users)
	})
})