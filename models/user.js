'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Message)
      User.hasMany(models.Favorite)
      User.hasMany(models.Log)
    }
  };
  User.init({
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    address: DataTypes.TEXT,
    imgUrl: DataTypes.TEXT,
    quotes: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};