const { Destination } = require('../models/index')

class Controller {
    static allDestination(req,res,next) {
        Destination
            .findAll({
                order: [["name", "asc"]]
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next({
                    code:500
                })
            })
    }

    static patchDescriptions(req,res,next){
        // console.log('masuk', 98888)
        const id = +req.params.id
        const {descriptions} = req.body
        const newDescriptions = {descriptions}

        Destination
            .findByPk(id)
            .then(data => {
                console.log(data)
                if(!data){
                    next({
                        code: 404
                    })
                } else {
                    return Destination.update(newDescriptions, {
                        where:{
                            id
                        }
                    })
                }
            })
            .then(data => {
                res.status(200).json({message: `Description has been updated`})
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

    static deleteDestination(req,res,next){
        const id = +req.params.id
        Destination
            .destroy({
                where: {
                    id
                }
            })
            .then(data => {
                res.status(201).json({message: `Successfully deleted Destination woth ID ${id}`})
            })
            .catch(err => {
                next({
                    code:500
                })
            })
    }

    static addDestination(req,res,next){
        const { city, descriptions, image} =req.body
        const newDestination = {city, descriptions, image}
        
        Destination
            .create(newDestination)
            .then(data => {
                res.status(200).json({id: data.id, city: data.city, descriptions: data.descriptions, image: data.image})
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