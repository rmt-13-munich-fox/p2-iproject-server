const {User, Car, Favorite} = require('../models')

class Cars{
    static async fetchData(req, res, next){
        try {
            const data = await Car.findAll()
            res.status(200).json(data)
        } catch (err) {
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
    static async detailData(req, res, next){
        try {
            const {id} = req.params
            const data = await Car.findByPk(id)
            res.status(200).json(data)
        } catch (err) {
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

module.exports = Cars