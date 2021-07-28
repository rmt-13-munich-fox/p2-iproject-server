'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Plan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Plan.belongsTo(models.Travel, {
        foreignKey: "TravelId"
      })
    }
  };
  Plan.init({
    day: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "please input day"
        }
      }
    },image_url: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "please input image_url"
        },
      }
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "please input name"
        }
      }
    },
    descriptions: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "please input descriptions"
        }
      }
    },
    hotel: DataTypes.STRING,
    TravelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Plan',
  });
  return Plan;
};