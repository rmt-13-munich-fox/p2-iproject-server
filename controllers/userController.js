const {User} = require('../models')
const hashCompare = require('../helpers/verifyHash')
const signUser = require('../helpers/generateToken')

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
    .then((user) =>{
      res.status(201).json({message : `user with email ${user.email} has been registered`})
    })
    .catch((error) =>{
      next(error)
    })
  }
}


module.exports = Controller