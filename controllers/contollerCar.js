const {User, Car, Favorite} = require('../models')

class Cars{
    static async fetchData(req, res, next){
        try {
            const data = await Car.findAll()
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
            next({
                code: err.code,
                message: err.message
            })
        }
    }
    static async detailData(req, res, next){
        try {
            const {id} = req.params
            const data = await Car.findByPk(id)
            res.status(200).json(data)
        } catch (err) {
            next({
                code: err.code,
                message: err.message
            })
        }
    }
}

module.exports = Cars