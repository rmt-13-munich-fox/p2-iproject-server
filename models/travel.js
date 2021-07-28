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
    durations: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "please input descriptions"
        }
      }
    },
    image_url: {
      type: DataTypes.STRING,
      validate: {
        isUrl: {
          msg: "please input image URL"
        }
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        notEmpty: {
          msg: "please input price"
        }
      }
    },
    inclusive: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: "please input inclusive"
        }
      }
    },
    exclusive:{
      type: DataTypes.TEXT,
      validate: {
        notEmpty: {
          msg: "please input exclusive"
        }
      }
    },
  }, {
    sequelize,
    modelName: 'Travel',
  });
  return Travel;
};