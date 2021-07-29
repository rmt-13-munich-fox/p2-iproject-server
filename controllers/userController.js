const {User} = require('../models/index')
const {jwtSign} = require('../helpers/jwtVerify')
const bcrypt = require('bcryptjs')
class userController{
    static register(req,res,next){
        let newUser = {
            name : req.body.name,
            email : req.body.email,
            password : req.body.password
          }
          User.create(newUser)
          .then((data) =>{
              res.status(201).json({id : data.id, email:data.email})
            })
            .catch((error) =>{
                if(error){
                    console.log(error);
                  next({
                    code : 400,
                    message : "email is already exists"
                  })
                } else {
                  next({
                    code : 500,
                    message : "Internal Server Error"
                  })
                }
            })
    }
    static login(req,res,next){
        User.findOne({where : {email : req.body.email}})
        .then((data) =>{
            if(data){
                if(bcrypt.compareSync(req.body.password,data.password)){
                    let access_token = jwtSign(data.id,data.email)
                    res.status(200).json({name:data.name,access_token:access_token})
                } else{
                    next({
                        code : 401,
                        message : "Invalid Email/Password"
                    })
                }
            } else{
                next({
                code : 401,
                message : "Invalid Email/Password"
                })
            } 
        })
        .catch((error) =>{
            next({
                code : 500,
                message : "Internal Server Error"
            })
        })
    }
    static gLogin(req,res,next){
        let payload ;
        const {id_token} = req.body
        const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
        client.verifyIdToken({
              idToken: id_token,
              audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
          })
          .then((data) => {
            payload = data.getPayload()
            return User.findOne({ where: { email : payload.email}})
          })
          .then((user) => {
            // if user not exist
            if(!user){
              const email = payload.email
              const name = payload.name
              const password = process.env.RANDOM_PASSWORD + Date.now()/1000
              return User.create({name,password,email})
            }else{ // if user already exists
              return User.findOne({where : {email: payload.email}})
            }
          })
          .then((user) => {
            let access_token = jwtSign(user.id,user.email)
            res.status(200).json({access_token})
          })
          .catch((error) =>{
            next({
              code : 500,
              message : "Internal Server Error"
            })
          })
    }
}
module.exports=userController