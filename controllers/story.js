const { Story } = require('../models/story')


class Controller {
    static allStoryByTravelId(req,res,next) {
        const id = +req.params.id
        Story
            .findAll({
                where: {
                    TravelId: id
                }
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next({code:500})
            })
    }

    static allStoryByDestId(req,res,next) {
        const id = +req.params.id
        Story
            .findAll({
                where: {
                    DestinationId: id
                }
            })
            .then(data => {
                res.status(201).json(data)
            })
            .catch(err => {
                next({code:500})
            })
    }

    static addStory(req,res,next){
        const {name,descriptions,image} = req.body
        const newStory = {name,descriptions,image}

        Story
            .create(newStory)
            .then(data => {
                res.status(200).json({id: data.id, name:data.name, descriptions:data.descriptions, image: data.image})
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

    static updateDescriptions(req,res,next){
        console.log('masuk update')
        const id = +req.params.id
        console.log(id)
        const {name, descriptions, image} = req.body
        const updatedStory = {name, descriptions, image}
        console.log(updatedStory, 8888)

        Story
            .update(updatedStory, {
                where:{
                    id
                }
            })
            .then(data => {
                console.log('masuk then')
                console.log(data)
            })
            .catch(err => {
                console.log('masuk catch')
                console.log(err)
            })
    }

    static deleteStory(req,res,next){}

}



module.exports = Controller