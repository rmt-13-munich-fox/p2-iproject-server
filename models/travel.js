'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Travel extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Travel.hasMany(models.Story, {
        foreignKey: "TravelId"
      })
      Travel.hasMany(models.Plan, {
        foreignKey: "TravelId"
      })
    }
  };
  Travel.init({
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
    image: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: "please input image URL"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Travel',
  });
  return Travel;
};