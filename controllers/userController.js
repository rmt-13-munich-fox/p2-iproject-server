const {User} = require('../models')
const hashCompare = require('../helpers/verifyHash')
const signUser = require('../helpers/generateToken')
const sendEmail = require('../helpers/sendEmail')
const hashPassword = require('../helpers/hashPassword')
const {OAuth2Client} = require('google-auth-library');
const jwt = require('jsonwebtoken')
class Controller{
  static login = (req,res,next) =>{
    console.log(req.body)
    User.findOne({
      where: {
        email : req.body.email
      }
    })
    .then((user) =>{
      if(user){
        const userHashedPassword = user.password
        const email = user.email
        let password = req.body.Password
        !req.body.password ? password = "" : password = req.body.password
        const id = user.id
        console.log(id)
        if(hashCompare(password,userHashedPassword)){
          let accessToken = signUser(id,email)
          res.status(200).json({access_token : accessToken})
        }else{
          next({
            code : 401,
            message : "email / password is incorrect"
          })
        }
      }else {
        next({
          code : 401,
          message : "email / password is incorrect"
        })
      }
    })
    .catch (err =>{
      next(err)
    })
  }
  static register = (req,res,next) =>{
    const newUser = Object.assign({}, req.body)
    User.create(newUser)
    .then(async (user) =>{
      sendEmail(user.email,"Account registration",`Your account has been registered successfully, you can login through this link ${process.env.CLIENT_URL}`)
      res.status(201).json({message : `user with email ${user.email} has been registered`})
    })
    .catch((error) =>{
      next(error)
    })
  }

  
  static generateLinkReset(req,res,next){
    const email = req.body.email
    console.log(email)
    User.findOne({where : {email}})
    .then(async (user) => {
      if(user){
        let reset_token = jwt.sign({email},"SECRET",{expiresIn : 3600})
        sendEmail(user.email,"Link to reset your password!",`Hello, you can reset your password this link ${process.env.CLIENT_URL}/reset-password/?reset_token=${reset_token}`)
        res.status(200).json({reset_token})
      }else res.status(404).json({message : "user not found"})
    })
    .catch((err) =>{
      next(err)
    })
  }

  static resetPassword = (req, res, next) => {
    const reset_token_query = req.query.reset_token
    let payload = jwt.verify(reset_token_query,"SECRET")
    const email = payload.email
    const newPassword = req.body.password
    User.findOne({
      where : { email}
    })
    .then(async(user) => {
      if(user){
        if(payload.email === user.email){
          console.log("Masuk")
          user.password = hashPassword(newPassword)
          user.save()
          console.log('hiyaa')
          // await sendEmail(user.email,"Password changed!",`Your password has been reset successfully, you can login through this link ${process.env.CLIENT_URL}`)
          res.status(200).json({message:"Password has been reset successfully"})
        }else{
          res.status(400).json({message : "invalid reset token"})
        }
      }
      else{
        res.status(404).json({ message : `User with ${email} is not found`})
      }
    })
    .catch((err) => {
      next(err)
    })
  }

  static loginGoogle(req,res,next){
    let payload ;
    const {id_token} = req.body
    const client = new OAuth2Client(process.env.GOOGLE_CLIENT_ID);
    client.verifyIdToken({
          idToken: id_token,
          audience: process.env.GOOGLE_CLIENT_ID,  // Specify the CLIENT_ID of the app that accesses the backend
      })
      .then((ticket) => {
        payload = ticket.getPayload()
        return User.findOne({ where: { email : payload.email}})
      })
      .then((user) => {
        // if user not exist
        if(!user){
          const email = payload.email
          const username = payload.name
          const password = process.env.RANDOM_PASSWORD + Date.now()/1000
          return User.create({password,email})
        }else{ // if user already exists
          return User.findOne({where : {email: payload.email}})
        }
      })
      .then((user) => {
        let access_token = signUser(user.id,user.email)
        res.status(200).json({access_token})
      })
      .catch((error) =>{
        next(error)
      })
  }
}


module.exports = Controller