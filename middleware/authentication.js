const { User } = require('../models')
const jwt = require('jsonwebtoken')

async function authentication(req, res, next){
    try{
        const { access_token } = req.headers
        if(access_token){
            const payload = jwt.verify(access_token, process.env.SECRET)
            // console.log(payload, 'ini di validation');
            let dataUser = await User.findByPk(payload.id)
            if(dataUser){
                req.user = {id: dataUser.id, username: dataUser.username};
                // console.log(payload);
                next()
            } else if(!payload){
                throw {code:401, message: "Invalid JWT", name: "ErrorAuthentication"}
            }
        } else{
            // console.log(access_token);
            throw {code:401, message: "Please login first", name: "ErrorAuthentication"}
        }
    }
    catch(err){
        if(err.code){
            next({
                name: err.name,
                message: err.message
            })
        }
        next({
            name: "InternalErrorServer",
            message: err.message
        })
    }
}
module.exports = authentication