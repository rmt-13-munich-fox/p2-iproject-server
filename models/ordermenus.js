'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderMenus extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  OrderMenus.init({
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    OrderId: DataTypes.INTEGER,
    MenuId: DataTypes.INTEGER,
    quantityItem: DataTypes.INTEGER,
    quantityPrice: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'OrderMenus',
  });
  return OrderMenus;
};