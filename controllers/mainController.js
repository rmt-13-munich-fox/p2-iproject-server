const {User, Marmut} = require('../models')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
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
			res.status(201).json({email:response.email, username:response.username})
		})
		.catch(err => {
			res.status(500).json('Internal Server Error')
		})
	}

	static login (req,res){
        User.findOne({where:{email:req.body.email}})
        .then(data =>{
            if(!data){
                res.status(401).json({message:'User not found'})
            }else if (bcrypt.compare(req.body.password, data.password)){
                let access_token = jwt.sign({id: data.id, email:data.email, username:data.username}, process.env.SECRET_CODE, {expiresIn: 60 * 60})
                res.status(200).json({access_token})
            }else{
                res.status(401).json({message:'Invalid info'})
            }
        })
        .catch(err =>{
            res.status(401).json(err.message);
        })
    }
}

module.exports = Controller;