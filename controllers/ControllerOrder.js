const { Menu, Order } = require('../models/index')

class ControllerOrder {
    static post(req, res) {
        let { customerName } = req.body
        let newOrder = {
            customerName,
            AdminId: +req.admin.id
        }
        Order.create(newOrder)
            .then(data => {
                req.order = { id: data.id }
                res.status(201).json(data)
            })
            .catch(err => {
                res.status(500).json({ error: err.message || "Internal Server Error" })
            })
    }

    static allOrder(req, res) {
        let id = +req.params.orderid
        Order.findOne({ where: { id }, include: [{ model: Menu, attributes: { exclude: ["createdAt", "updatedAt"] } }] })
            .then(dataOrder => {
                res.status(200).json(dataOrder)
            })
            .catch(err => {
                res.status(500).json({ error: err.message || "Internal Server Error" })
            })
    }

    static allCustomerOrder(req, res) {
        Order.findAll({ include: [{ model: Menu, attributes: { exclude: ["createdAt", "updatedAt"] } }] })
            .then(dataOrder => {
                res.status(200).json(dataOrder)
            })
            .catch(err => {
                res.status(500).json({ error: err.message || "Internal Server Error" })
            })
    }
}

module.exports = ControllerOrder;