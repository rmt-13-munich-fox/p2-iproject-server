'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcrypt.js')
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Admin.hasMany(models.Order)
    }
  };
  Admin.init({
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please insert email'
        },
        isEmail: {
          msg: 'Please insert correct email format'
        }
      },
      unique: {
        msg: 'Email already exist'
      }
    },
    password: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: 'Please insert email'
        },
        len: {
          args: [6, 20],
          msg: 'Please insert password minimal 6 up to 20 characters'
        }
      }
    },
  }, {
    hooks: {
      beforeCreate: (instances, options) => {
        const salt = bcrypt.genSaltSync(8);
        const hash = bcrypt.hashSync(instances.password, salt);
        instances.password = hash
      }
    },
    sequelize,
    modelName: 'Admin',
  });
  return Admin;
};