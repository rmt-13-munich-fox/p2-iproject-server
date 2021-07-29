const { User } = require('../models');
const { comparePass } = require('../helpers/bcrypt');
const { signJWT } = require('../helpers/jwt');

class UserController {
    static async login(req, res, next) {
        let theUser = {
            email: req.body.email,
            password: req.body.password
        }

        try {
            const user = await User.findOne({
                where: {
                    email: theUser.email
                }
            })
            
            if (user) {
                if (comparePass(theUser.password, user.password)) {
                    let access_token = signJWT({
                        id: user.id,
                        email: user.email,
                    })

                    res.status(200).json({
                        access_token
                    })
                }
                else {
                    next({
                        name: 'AuthenticationError',
                        message: 'Invalid email / password'
                    })
                }
            }
            else {
                next({
                    name: 'AuthenticationError',
                    message: 'Invalid email / password'
                })
            }
        } catch (err) {
            next({
                name: 'ServerError',
                message: err.message || 'Internal server error'
            })
        }
    }

    static async regis(req, res, next) {
        try {
            const newUser = await User.create({
                email: req.body.email,
                password: req.body.password,
            })

            res.status(201).json({
                id: newUser.id,
                email: newUser.email
            })
        }
        catch (err) {
            next({
                name: 'ServerError',
                message: err.message || 'Internal server error'
            })
        }
    }
}

module.exports = UserController