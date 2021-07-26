const e = require('express')
const {User} = require('../models/index')
const getPayload = require('../helpers/getPayload')
const authentification = (req,res,next) => {
  // check if access_token is exist in header
const {access_token} = req.headers
  if(access_token){
    // decode access_token 
    try{
      // if token decoded successfully
      let payload = getPayload(access_token)
      console.log(payload)
      User.findByPk(payload.id)
      .then(user =>{
        if(!user){ //if user null
          next({
            code : 401,
            message : "Invalid access token"
          })
        }else{
          // add new key to req object
          req.user = {
            id : user.id, 
            role : user.role
          }
          next()
        }
      }).catch(err => {
        next({
          code : 500,
          message : "Internal server error"
        })
      })
    }catch(e){
      next({
        code : 401,
        message : "Invalid access token"
      })
    }
  }else{
    next({
      code : 401,
      message : "Please log in first"
    })
  }
}



module.exports = {authentification}