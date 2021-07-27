'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Menu extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Menu.belongsTo(models.Category)
      Menu.belongsToMany(models.Order, {through: models.OrderMenu})
    }
  };
  Menu.init({
    name: DataTypes.STRING,
    img_url: DataTypes.STRING,
    price: DataTypes.INTEGER,
    isReady: DataTypes.BOOLEAN,
    CategoryId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Menu',
  });
  return Menu;
};