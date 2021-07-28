const {Plan} = require('../models/index')


class Controller {
    static allPlan(req,res,next){
        const TravelId = req.params.travel_id

        Plan
            .findAll({
                where:{
                    TravelId
                },
                order: [['day', 'ASC']]
            })
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                next({code: 500})
            })
    }

    static addPlan(req,res,next){
        const {day, image_url, name,descriptions,hotel, TravelId} = req.body
        const newPlan = {day, image_url, name,descriptions,hotel, TravelId}

        Plan
            .create(newPlan)
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                if(err.errors === undefined) {
                    next({code: 500})
                } else {
                    if(err.errors.length){
                        let errors = err.errors.map(el => {
                            return el.message
                        })
                        next({code: 400, msg: errors})
                    }
                }
            })
    }

    static updatePlan(req,res,next){
        const id = +req.params.id
        const {day, image_url, name,descriptions,hotel, TravelId} = req.body
        const updatedPlan = {day, image_url, name,descriptions,hotel, TravelId}

        Plan
            .update(updatedPlan, {
                where:{
                    id
                }
            })
            .then(data => {
                if(data[0] === 1){
                    res.status(200).json({message: `Plan with id ${id} has been updated`})
                } else {

                }
            })
            .catch(err => {
                if(err.errors === undefined) {
                    next({code: 500})
                } else {
                    if(err.errors.length){
                        let errors = err.errors.map(el => {
                            return el.message
                        })
                        next({code: 400, msg: errors})
                    }
                }
            })
    }

    static deletePlan(req,res,next){
        const id = +req.params.id

        Plan
            .destroy({
                where: {
                    id
                }
            })
            .then(data => {
                if(data){
                    res.status(200).json({message: `Plan with id ${id} has been deleted`})
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
