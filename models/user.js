'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    
    static associate(models) {
      // define association here
    }
  };
  User.init({
    username: {
      type : DataTypes.STRING,
      validate: {
        notEmpty : true
      }
    },
    email: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true,
        isEmail: true
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : true
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};