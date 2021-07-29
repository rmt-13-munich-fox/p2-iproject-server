'use strict';
const {
  Model
} = require('sequelize');
const {hash} = require('../helpers/hashing');
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
        notEmpty : { msg: 'no Username' }
      }
    },
    email: {
      type : DataTypes.STRING,
      unique: { msg: 'exist'},
      validate : {
        notEmpty : { msg: 'no Email' },
        isEmail: {msg: 'format email wrong'}
      }
    },
    password: {
      type : DataTypes.STRING,
      validate : {
        notEmpty : { msg: 'no Password' }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });

  User.addHook('beforeCreate', (instance, options) => {
    instance.password = hash(instance.password);
  });
  return User;
};