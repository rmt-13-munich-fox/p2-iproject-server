const {User, Car, Favorite} = require('../models')

class Favorites{
    static async fetchData(req, res, next){
        try {
            const UserId = req.user.id
            const data = await Favorite.findAll({
                include: [{model: Car}, {model: User}],
                where: {UserId}
            })
            // console.log(data);
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
            // console.log(UserId, CarId);
            const bool = await Favorite.findOne({where: {UserId, CarId}})
            if(bool){
                throw {code: 400, message: "This car have been selected"}
            } else{
                const data = await Favorite.create({UserId, CarId: +CarId})
                if(data){
                    res.status(201).json(data)
                }else{
                    throw {
                        code: 400,
                        message: "Error Create Table",
                        name: "ErrorCreateAndEdit",
                      };
                }
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
            const data = await Favorite.destroy({where: {id}})
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