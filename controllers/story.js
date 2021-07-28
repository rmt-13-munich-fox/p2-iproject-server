// const { Story } = require('../models/story')
const {Story} = require('../models/index')


class Controller {
    static allStory(req,res,next) {
        Story
            .findAll()
            .then(data => {
                res.status(200).json(data)
            })
            .catch(err => {
                // console.log(err)
                next({code: 500})
            })
    }

    static findStory(req,res,next){
        const id = +req.params.id

        Story
            .findOne({where:{id}})
            .then(data => {
                if(data){
                    res.status(200).json(data)
                } else {
                    next({code:404})
                }
            })
            .catch(err => {
                next({code: 500})
            })
    }

    static addStory(req,res,next){
        const {name,descriptions,image_url} = req.body
        const newStory = {name,descriptions,image_url}

        Story
            .create(newStory)
            .then(data => {
                res.status(200).json(data)
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

    static updateStory(req,res,next){
        const id = +req.params.id
        const {name, descriptions, image_url} = req.body
        const updatedStory = {name, descriptions, image_url}
        // console.log(updatedStory, 8888)

        Story
            .update(updatedStory, {
                where:{
                    id
                }
            })
            .then(data => {
                res.status(200).json({message: `Story with ID ${id} has been updated`})
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

    static deleteStory(req,res,next){
        const id = +req.params.id

        Story
            .destroy({
                where: {
                    id
                }
            })
            .then((data) => {
                if(data){
                res.status(200).json({message: `Story with ID ${id} has been deleted`})
                } else {
                    next({code: 404})
                }
            })
            .catch(err => {
                next({code:500})
            })
    }

}



module.exports = Controller