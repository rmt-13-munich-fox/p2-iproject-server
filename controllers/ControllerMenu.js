const {Menu, Category} = require('../models/index')

class ControllerMenu {
    static list(req, res, next) {
        Menu.findAll({include: [{model: Category, attributes: {exclude: ["createdAt", "updatedAt"]}}]})
            .then(data => {
                res.status(200).json(data)
            })
            .then(() => {
                res.status(500).json({error: err.message || "Internal Server Error"})
            })
    }

    static findById(req, res, next) {
        let id = +req.params.id
        Menu.findByPk(id, {include: [{model: Category, attributes: {exclude: ["createdAt", "updatedAt"]}}]})
            .then(data => {
                if (data) {
                    res.status(200).json(data)
                } else {
                    res.status(404).json({error: "Data not found"})
                }
            })
            .catch(err => {
                res.status(500).json({error: err.message || "Internal Server Error"})
            })
    }
}

module.exports = ControllerMenu;