const {Message, Log, User} = require('../models')

class Socket{
    static async fetchDataMessage(req, res, next){
        try {
            const data = await Message.findAll({
                include: [{model: User}]
            })
            res.status(200).json(data)
        } catch (err) {
            // console.log(err);
            if(err.code){
                next({
                    name: err.name,
                    message: err.message
                })
            } else {
                next({
                    name: "InternalErrorServer",
                    message: "Internal Server Error"
                })
            }
        }
    }
    static async fetchDataLog(req, res, next){
        try {
            const data = await Log.findAll({
                include: [{model: User}]
            })
            res.status(200).json(data)
        } catch (err) {
            // console.log(err)
            if(err.code){
                next({
                    name: err.name,
                    message: err.message
                })
            } else {
                next({
                    name: "InternalErrorServer",
                    message: "Internal Server Error"
                })
            }
        }
    }
}

module.exports = Socket