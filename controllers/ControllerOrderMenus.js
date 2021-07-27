const {Menu, Category, Order, OrderMenus} = require('../models/index')

class ControllerOrderMenus {
    static addToCart(req, res, next) {
        let OrderId = +req.body.OrderId
        console.log('udah masuk kesini?', 12313123);
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
                console.log(err);
                res.status(500).json({error: err.message || "Internal Server Error"})
            })
    }
}

module.exports = ControllerOrderMenus;