const {User} = require('../models')
const hashCompare = require('../helpers/verifyHash')
const signUser = require('../helpers/generateToken')
const sendEmail = require('../helpers/sendEmail')
const hashPassword = require('../helpers/hashPassword')
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
      await sendEmail(user.email,"Account registration",`Your account has been registered successfully, you can login through this link ${process.env.CLIENT_URL}`)
      res.status(201).json({message : `user with email ${user.email} has been registered`})
    })
    .catch((error) =>{
      next(error)
    })
  }

  static resetPassword = (req, res, next) => {
    const email = req.params.email
    const newPassword = req.body.password
    User.findOne({
      where : { email}
    })
    .then(async(user) => {
      if(user){
        user.password = hashPassword(newPassword)
        user.save()
        await sendEmail(user.email,"Password changed!",`Your password has been reset successfully, you can login through this link ${process.env.CLIENT_URL}`)
        res.status(200).json({message:"Password has been reset successfully"})
      }
      else{
        res.status(404).json({ message : `User with ${email} is not found`})
      }
    })
    .catch((err) => {
      next(err)
    })
  }
}


module.exports = Controller