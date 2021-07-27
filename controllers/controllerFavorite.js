const {User, Car, Favorite} = require('../models')

class Favorites{
    static async fetchData(req, res, next){
        try {
            const data = Favorite.findAll()
            res.status(200).json(data)
        } catch (err) {
            console.log(err);
            next({
                code: err.code,
                message: err.message
            })
        }
    }
    static async addFavorite(req, res, next){
        try {
            const {CarId} = req.body
            const UserId = req.user.id
            const data = Favorite.create({CarId, UserId})
            if(data){
                res.status(201).json(data)
            }else{
                throw {
                    code: 400,
                    message: "Error Create Table",
                    name: "ErrorCreateAndEdit",
                  };
            }
        } catch (err) {
            console.log(err);
            next({
                code: err.code,
                message: err.message
            })
        }
    }
    static async removeFavorite(req, res, next){
        try {
            const id = req.params.id
            const data = Favorite.destroy({where: {id}})
            if(data){
                res.status(200).json({message: `success to remove favorites`})
            } else{
                throw {
                    code: 404,
                    message: "data cannot be found",
                    name: "DataCannotBeFound",
                  };
            }
        } catch (err) {
            console.log(err);
            next({
                code: err.code,
                message: err.message
            })
        }
    }
}

module.exports = Favorites