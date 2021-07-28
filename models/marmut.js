'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Marmut extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    }
  };
  Marmut.init({
    name: DataTypes.STRING,
    gender: DataTypes.STRING,
    imgURL: DataTypes.STRING,
    age: DataTypes.INTEGER,
    submittedBy: DataTypes.STRING,
    description: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Marmut',
  });
  return Marmut;
};