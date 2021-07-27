const {generateToken} = require('../helpers/jwt')
const {Admin} = require('../models/index')
const bcrypt = require('bcryptjs')

class ControllerAdmin {
    static register(req, res, next) {
        let {email, password} = req.body
        let newAdmin = {email: email, password: password}

        Admin.create(newAdmin)
            .then(admin => {
                res.status(201).json({id: admin.id, email: admin.email})
            })
            .catch((err) => {
                if (Array.isArray(err.errors)) {
                    let errorMessage = err.errors.map(el => el.message)
                    res.status(400).json({error: errorMessage})
                } else {
                    res.status(500).json({error: err.message || "Internal server error"})
                }
            })
    }

    static login (req, res, next) {
        let {email, password} = req.body
        Admin.findOne({where: {email: email}})
            .then(admin => {
                if (bcrypt.compareSync(password, admin.password)) {
                    let access_token = generateToken({id: admin.id, email: admin.email})
                    res.status(200).json({access_token})
                } else {
                    res.status(401).json({error: "Invalid Email/Password" })
                }
            })
            .catch((err) => {
                res.status(401).json({error: "Invalid email/password"})
            })
    }


}

module.exports = ControllerAdmin