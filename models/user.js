'use strict';
const { Model } = require('sequelize');
const hashPassword = require('../helpers/hashPassword')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    static associate(models) {
      // define association here
      User.belongsToMany(models.News,{through : models.Bookmark})
    }
  };
  User.init({
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull : {
          msg : "Email is required"
        },
        notEmpty : {
          msg : "Email cant be empty"
        },
        isEmail: {
          msg : "Please enter a valid email"
        },
      }
    },
    imgUrl: DataTypes.STRING,
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate : {
        notNull : {
          msg : "Password is required"
        },
        notEmpty : {
          msg : "Password is required"
        },
        min : {
          args : [5],
          msg : "password should has more than 5 characters"
        },
        max : {
          args : [20],
          msg : "password should has less than 20 characters"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate : (instance,option) =>{
        instance.password = hashPassword(instance.password)
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};