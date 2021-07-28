'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Order.belongsToMany(models.Menu, {through: models.OrderMenus})
      Order.belongsTo(models.Admin)
    }
  };
  Order.init({
    customerName: { 
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please insert customer name'
        }
      }
    },
    AdminId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};