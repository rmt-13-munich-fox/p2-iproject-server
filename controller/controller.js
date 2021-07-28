const createToken = require("../helper/createToken")
const { User, Chat } = require("../models/index")

class Controller {
    static login (req, res) {
        const newUser = {
            username: req.body.username
        }
        User.create(newUser)
        .then((data) => {
            let token = createToken({id: data.id, username: data.username})
            req.headers.access_token = token
            res.status(201).json({
                username: data.username,
                token: token
            })
        })
        .catch((err) => {
            console.log(err);
            res.status(400).json(err)
        })
    }

    static destroyAll(req, res) {
        console.log(req.user);
        const username = req.user.username
        const id = req.user.id
        User.destroy({
            where: {
                id
            }
        })
        .then(() => {
            return Chat.destroy({
                where: {
                    id
                }
            })
        })
        .then(() => {
            res.status(200).json({msg: `${username} leave the chat`})
        })
        .catch((err) => {
            res.status(500).json({msg: "Internal Services Error"})
        })
    }

    static postMsg(req, res) {
        let id = req.user.id
        let newMessage = {
            UserId: id,
            chat: req.body.chat
        }
        Chat.create(newMessage)
        .then((data) => {
            res.status(201).json(data)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }

    static getChat(req, res) {
        let id = req.user.id
        Chat.findAll({
            order: [ [ "createdAt", "ASC"] ],
            include: [
                {model: User}
            ]
        })
        .then((data) => {
            data = data.map(e => {
                return {
                    username: e.User.username,
                    message: e.chat
                }
            })
            res.status(200).json(data)
        })
        .catch((err) => {
            res.status(500).json(err)
        })
    }

    static getUserLog (req, res) {
        User.findAll()
        .then((data) => {
            console.log(data);
            res.status(200).json(data)
        })
        .catch((err) => [
            res.status(500).json(err)
        ])
    }
}

module.exports = Controller