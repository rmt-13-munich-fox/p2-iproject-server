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
      User.hasMany(models.Post, { foreignKey: 'userId' })      
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'Email already exist'
      },
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please input your email'
        },
        notEmpty: {
          msg: 'Email cannot be empty'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please input your password'
        },
        notEmpty: {
          msg: 'Password cannot be empty'
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};