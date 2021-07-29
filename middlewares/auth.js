const { User } = require('../models');
const { verifyJWT } = require('../helpers/jwt');

function authentication(req, res, next) {
    let { access_token } = req.headers
    if (access_token) {
        try {
            let decoded = verifyJWT(access_token)

            req.user = {
                email: decoded.email,
                id: decoded.id
            }

            next()
        }
        catch (err) {
            next({
                name: 'AuthenticationError',
                message: 'You must login first'
            })
        }
    }
    else {
        next({
            name: 'AuthenticationError',
            message: 'You must login first'
        })        
    }
}

function authorization(req, res, next) {    
    
}

module.exports = {
    authentication
}