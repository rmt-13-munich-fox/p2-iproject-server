"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Activity extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Activity.belongsTo(models.User, { foreignKey: "UserId" });
      Activity.belongsTo(models.Hobby, { foreignKey: "HobbyId" });
    }
  }
  Activity.init(
    {
      active: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          notNull: {
            msg: "activity canot be null",
          },
          notEmpty: {
            msg: "activity canot be empty",
          },
        },
      },
    },
    {
      sequelize,
      modelName: "Activity",
    }
  );
  return Activity;
};
