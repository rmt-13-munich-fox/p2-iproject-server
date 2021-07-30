const {User, Marmut} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const image = require('../helper/imagekit')
const nodemailer = require('nodemailer')


class Controller {
	static register(req,res) {
		const salt = bcrypt.genSaltSync(7);
		const hash = bcrypt.hashSync(req.body.password, salt);
		let newUser = {
			email: req.body.email,
			username: req.body.username,
			password: hash
		}
		User
		.create(newUser)
		.then(response => {

			let transporter = nodemailer.createTransport({
			service: "gmail",
			auth: {
				user: "marmutdad@gmail.com",
				pass: "ayahmarmut28"
			}
		})

			let mailOptions = {
				from: "marmutdad@gmail.com",
				to:`${response.email}`,
				subject: `Wheek wheek!`,
				text: `Congratulations you are registered as anakmarmut with username ${response.username}! We hope you enjoy your visit here, wheek!`
			}

			transporter.sendMail(mailOptions, function(err,data) {
				if(err){
					console.log('Error sending mail')
				}else{
					console.log('Email sent successfully')
				}
		})
			res.status(201).json({email:response.email, username:response.username})
		})
		.catch(err => {
			res.status(500).json('Internal Server Error')
		})
	}

	static login (req,res){
		const {email, password} = req.body
        User.findOne({where:{email}})
        .then(data =>{
            if(!data){
                res.status(401).json({message:'User not found'})
            }else{
				if (bcrypt.compareSync(password, data.password)){
					let access_token = jwt.sign({id: data.id, email:data.email, username:data.username}, "process.env.SECRET_CODE", {expiresIn: 60 * 60})
					res.status(200).json({access_token, username:data.username})
				}else{
					res.status(401).json({message:'Invalid info'})
				}

			} 
        })
        .catch(err =>{
            res.status(401).json(err.message);
        })
    }

	static getMarmut (req,res) {
		Marmut
		.findAll()
		.then(response => {
			res.status(200).json(response)
		})
		.catch(err => {
			res.status(400).json(err.message)
		})
	}

	static async postMarmut(req, res, next) {
		// console.log(req)
        try {
            let {
                name,
                gender,
				age,
                submittedBy,
				description
            } = req.body
            const imageName = req.file.originalname
            const buffer = req.file.buffer.toString('base64')
            let imgURL = await image(imageName, buffer)
            imgURL = imgURL.url
			// console.log(name,age,gender,age,submittedBy,description)
            const addMarmut = await Marmut.create({
				name,
                gender,
                imgURL,
				age,
                submittedBy,
				description
            })
			// console.log(addMarmut.name)
            if (addMarmut) {
                res.status(201).json(`Little ${addMarmut.name} has been added to the community! Welcome!`)
            } else {
                res.status(401).json({
                    message: "Error Create Table",
                    name: "ErrorCreateAndEdit"
                })
            }
        } catch (err) {
			// console.log(err.message)
			res.status(500).json('Internal Server Error')
        }
    }
}

module.exports = Controller;