const {Menu, Category, Order, OrderMenus} = require('../models/index')
const axios = require('axios')

class ControllerOrderMenus {
    static addToCart(req, res) {
        let OrderId = +req.body.OrderId
        let MenuId = +req.params.menuid
        let price
        let quantityPrice
        let {quantityItem} = req.body
        let newOrder = {
            OrderId,
            MenuId,
            quantityItem,
            quantityPrice,
        }
        Menu.findByPk(MenuId)
            .then(dataMenu => {
                price = dataMenu.price
                newOrder.quantityPrice = newOrder.quantityItem * price
                return OrderMenus.create(newOrder)
            })
            .then(dataOrderMenu => {
                res.status(201).json(dataOrderMenu)
            })
            .catch(err => {
                res.status(500).json({error: err.message || "Internal Server Error"})
            })
    }

    static deleteFood(req, res) {
        let MenuId = +req.params.menuid
        OrderMenus.destroy({where: {MenuId}})
            .then(() => {
                res.status(200).json({message: "Food has been deleted"})
            })
            .catch(err => {
                res.status(500).json({error: err.message || "Internal Server Error"})
            })
    }

    static postFood(req, res) {
        let insertData = {
            customerName: req.body.customerName,
            AdminId: +req.admin.id
        }
        Order.create(insertData)
        .then(dataOrder => {
            let inputOrder = req.body.orders.map(el => {
                return {
                    OrderId: dataOrder.dataValues.id,
                    MenuId: el.id,
                    quantityItem: el.quantity,
                    quantityPrice: el.price
                }
            })
            return OrderMenus.bulkCreate(inputOrder)
        })
        .then(dataOrderMenus => {
            console.log(dataOrderMenus,999);
            res.status(201).json(dataOrderMenus)
        })
        .catch(err => {
            res.status(500).json({error: err.message || "Internal Server Error"})
        })
    }

    static handleCurrency(req, res) {
        let {currency, totalPrice} = req.body
        axios({
            method: "GET",
            url: `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/idr.json`,
        })
          .then(({data}) => {
                let converted = (data.idr[currency] * Number(totalPrice)).toFixed(2)
                res.status(200).json(converted)
          })
          .catch(err => {
            res.status(500).json({error: err.message || "Internal Server Error"})
          })
    }
}

module.exports = ControllerOrderMenus;