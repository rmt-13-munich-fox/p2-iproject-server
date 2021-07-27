const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET
const {  User } = require('../models/index')


const authentication = (req,res,next) => {
    const { access_token } = req.headers
    if(access_token){
        try {
            const payload = jwt.verify(access_token, secretKey)
            // console.log(payload)
            const id = payload.id

            User
                .findByPk(id)
                .then(data => {
                    if(!data){
                        next({
                            code: 401,
                            msg: "Invalid JWT"
                        })
                    } else {
                        req.user = {id: data.id, email:data.email}
                        next()
                    }
                })
                .catch(err => {
                    next({code:500})
                })
            
        } catch (error) {
            next({
                code: 401,
                msg: "Invalid JWT"
            })
        }

    }else {
        next({
            code: 400,
            msg: "Token required"
        })
    }
}



module.exports = {
    authentication
}