const {Travel, Plan} = require('../models/index')


class Controller {

    static allTravel(req,res,next){
        
        Travel
            .findAll()
            .then(data => {
                data = data.map(el => {
                    el.inclusive = el.inclusive.split(",")
                    el.exclusive = el.exclusive.split(",")
                    return el
                })
                res.status(200).json(data)
            })
            .catch(err => {
                console.log(err)
                next({code: 500})
            })
    }

    static findTravel(req,res,next){
        const id = +req.params.id

        Travel
            .findOne({
                where: {
                    id
                }
            })
            .then(data => {
                if(data){
                    res.status(200).json(data)
                } else {
                    next({code: 404})
                }
            })
            .catch(err => {
                // console.log(err)
                next({code: 500})

            })
    }

    static addTravel(req,res,next){
        const {name, durations, image_url, price, inclusive, exclusive} = req.body
        const newTravel = {name, durations, image_url, price, inclusive, exclusive}

        Travel
            .create(newTravel)
            .then(data => {
                res.status(201).json({message: `${newTravel}`})
            })
            .catch(err => {
                if(err.errors === undefined){
                    res.status({code: 500})
                } else {
                    if(err.errors.length){
                        let errors = err.errors.map(el => {
                            return el.message
                        })
                        res.status({code: 400, msg: errors})
                    }
                }
            })
    }

    static updateTravel(req,res,next){
        const id = +req.params.id
        const {name, durations, image_url, price, inclusive, exclusive} = req.body
        const updateTravel = {name, durations, image_url, price, inclusive, exclusive}

        Travel
            .create(updateTravel)
            .then(data => {
                res.status(201).json({message: `Travel has with ID ${id} been updated`})
            })
            .catch(err => {
                if(err.errors === undefined){
                    res.status({code: 500})
                } else {
                    if(err.errors.length){
                        let errors = err.errors.map(el => {
                            return el.message
                        })
                        res.status({code: 400, msg: errors})
                    }
                }
            })
    }

    static deleteTravel(req,res,next){
        const id = +req.params.id
        
        Travel
            .destroy({
                where: {
                    id
                }
            })
            .then((data) => {
                if(data){
                    res.status(200).json({message: `Travel with ID ${id} has been deleted`})
                } else {
                    next({code: 404})
                }
            })
            .catch(err => {
                next({code: 500})
            })
    }


}

module.exports = Controller