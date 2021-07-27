const {Country} = require('../models/index')

class Controller {
    static allCountries(req,res,next){
        console.log('masuk controller')
        Country
            .findAll({
                order: [["name", "asc"]]
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next({
                    code: 500
                })
            })
    }
    static addCountry(req,res,next){
        const { name } = req.body
        const newCountry = {
            name
        }

        Country
            .create(newCountry)
            .then(data => {
                res.status(201).json({message: `Successfully add ${data.name}`})
            })
            .catch(err => {
                if(err.errors === undefined){
                    next({
                        code: 500
                    })
                } else {
                    if(err.errors.length){
                        let errors = err.errors.map(el => {
                            return el.message
                        })
                        next({
                            code: 400,
                            msg: errors
                        })
                    } else {
                        next({
                            code: 500
                        })
                    }
                }
            })
    }
    static deleteCountry(req,res,next){
        const id = +req.params.id
        Country
            .destroy({
                where: {
                    id
                }
            })
            .then(data => {
                res.status(201).json({message: `successfully deleted Country with ID ${id}`})
            })
            .catch(err => {
                if(err.errors === undefined){
                    next({
                        code: 500
                    })
                } else {
                    if(err.errors.length){
                        let errors = err.errors.map(el => {
                            return el.message
                        })
                        next({
                            code: 400,
                            msg: errors
                        })
                    } else {
                        next({
                            code: 500
                        })
                    }
                }
            })
    }

}


module.exports = Controller