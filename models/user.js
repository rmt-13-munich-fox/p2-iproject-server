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
      User.hasMany(models.Chat)
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,  
      validate: {
        notNull: {
          args: true,
          msg: "Please insert your username correctly"
        },
        notEmpty: {
          args: true, 
          msg: "Please insert your username correctly"
        }
      }
    },
    Room: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,  
      validate: {
        notNull: {
          args: true,
          msg: "Please insert your room correctly"
        },
        notEmpty: {
          args: true, 
          msg: "Please insert your room correctly"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};