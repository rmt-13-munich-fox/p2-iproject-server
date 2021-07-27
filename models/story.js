'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Story extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Story.belongsTo(models.Travel, {
        foreignKey: "TravelId"
      })
    }
  };
  Story.init({
    name: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: {
          msg: "please input name"
        }
      }
    },
    description: {
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
    },
    TravelId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Story',
  });
  return Story;
};