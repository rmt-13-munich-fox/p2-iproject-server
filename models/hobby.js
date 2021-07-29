"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Hobby extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Hobby.belongsToMany(models.User, { through: models.Activity, foreignKey: "HobbyId" });
    }
  }
  Hobby.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "hobby cannot be null",
          },
          notEmpty: {
            msg: "hobby cannot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Hobby",
    }
  );
  return Hobby;
};
