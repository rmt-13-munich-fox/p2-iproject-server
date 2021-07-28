const {
    comparePassword
} = require('../helpers/bcryptHelper')
const {
    jwtSign
} = require('../helpers/jwt')
const {
    User
} = require('../models/index')

class UserController {
    static async registerAdmin(req, res, next) {
        try {
            const {
                username,
                email,
                password
            } = req.body

            const found = username.includes(' ')
            let word
            if (found) {
                word = username.split(' ').join('')
            } else {
                word = username
            }

            const createdAdmin = {
                username,
                email,
                password,
                role: "admin",
                avatarImg: `https://robohash.org/${word}?set=any`
            }

            const admin = await User.create(createdAdmin)
            if (admin) {
                res.status(201).json(admin)
            } else {
                next({
                    name: "internalServerError"
                })
            }
        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }

    static async registerClient(req, res, next) {
        try {
            const {
                username,
                email,
                password
            } = req.body

            const found = username.includes(' ')
            let word
            if (found) {
                word = username.split(' ').join('')
                console.log(word);
            } else {
                word = username
            }

            const createdClient = {
                username,
                email,
                password,
                role: "client",
                avatarImg: `https://robohash.org/${word}?set=any`
            }

            const client = await User.create(createdClient)
            if (client) {
                res.status(201).json(client)
            } else {
                next({
                    name: "internalServerError"
                })
            }

        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }

    static async login(req, res, next) {
        try {
            const {
                email,
                password
            } = req.body

            const loggedUser = await User.findOne({
                where: {
                    email
                }
            })

            if (loggedUser) {
                const isPassword = comparePassword(password, loggedUser.password)
                if (isPassword) {
                    const access_token = jwtSign(loggedUser.id, loggedUser.email, loggedUser.role, loggedUser.username)
                    res.status(200).json({
                        access_token
                    })
                } else {
                    next({
                        name: "userCantLogin"
                    })
                }
            } else {
                next({
                    name: "userCantLogin"
                })
            }
        } catch (error) {
            next({
                name: "internalServerError"
            })
        }
    }
}

module.exports = UserController