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
                        name: 'Error authentication',
                        message: 'Invalid password'
                    })
                }
            }
            else {
                next({
                    name: 'Error authentication',
                    message: 'Invalid email address'
                })
            }
        } catch (err) {
            next(err)
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
            next(err)
        }
    }
}

module.exports = UserController