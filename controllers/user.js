const { User } = require('../models/index')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const secretKey = process.env.SECRET

class Controller {
    static register(req,res,next){
        const { email, password } = req.body
        const newUser = {
            email,
            password
        }

        User.create(newUser)
            .then(data => { 
                res.status(201).json({id:data.id, email:data.email})
            })
            .catch(err => {
                if(err.errors === undefined){
                    next({
                        code: 500,
                        msg: 'Internal server error'
                    })
                } else {
                    if(err.errors.length){
                        let errors = err.errors.map(el => {
                            return el.message
                        })
                        next({
                            code: 400,
                            msg: errors
                        })
                    } else {
                        next({
                            code: 500,
                            msg: 'Internal server error'
                        })
                    }
                }
            })

    }

    static login(req,res,next){
        const { email, password} = req.body
        User
            .findOne({where:{email}})
            .then(data => {
                if(!data){ 
                    next({
                        code: 404,
                        msg: 'User is not registered'
                    })
                    
                } else {
                    if(bcrypt.compareSync(password, data.password)){
                        let access_token = jwt.sign({id: data.id, email: data.email}, secretKey)
                        res.status(200).json({access_token})
                    } else {
                        next({
                            code: 401,
                            msg: 'email/password is incorrect'
                        })
                    }
                }
            })
            .catch(err => {
                console.error(err)
                next({
                    code: 500,
                    msg: 'Internal server error'
                })
            })
    }

}



module.exports = Controller