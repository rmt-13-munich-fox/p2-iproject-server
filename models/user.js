'use strict';
const {
  Model
} = require('sequelize');
const bcrypt = require('bcryptjs')
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  User.init({
    email: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'please fill your email'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      validate:{
        notEmpty:{
          msg: 'please fill your password'
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (instance, options) => {
        const salt = bcrypt.genSaltSync(8);
        const hashedPassword = bcrypt.hashSync(instance.password, salt);

        instance.password = hashedPassword

      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};