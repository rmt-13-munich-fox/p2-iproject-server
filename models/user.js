"use strict";
const { hashPassword } = require("../helpers/bcrypt");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.belongsToMany(models.Hobby, { through: models.Activity, foreignKey: "UserId" });
    }
  }
  User.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "name cannot be null",
          },
          notEmpty: {
            msg: "name cannot be empty",
          },
        },
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          msg: "email is already exist",
        },
        validate: {
          notNull: {
            msg: "email cannot be null",
          },
          notEmpty: {
            msg: "email cannot be empty",
          },
          isEmail: {
            msg: "invalid email format",
          },
        },
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "name cannot be null",
          },
          notEmpty: {
            msg: "name cannot be empty",
          },
        },
      },
      dateOfBirth: DataTypes.DATE,
      imgURL: DataTypes.STRING,
      phoneNumber: DataTypes.INTEGER,
    },
    {
      hooks: {
        beforeCreate: (user) => {
          user.password = hashPassword(user.password);
        },
      },
      sequelize,
      modelName: "User",
    }
  );
  return User;
};
