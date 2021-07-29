'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Recipe.belongsToMany(models.User,{as : "Favorites", through : models.Favorite})
    }
  };
  Recipe.init({
    name: {
      type : DataTypes.STRING,
      allowNull:false,
      validate : {
        notNull:{
          args:true,
          msg:"name cannot be null"
        },
        notEmpty : true
      },
    },
    description: DataTypes.STRING,
    image: DataTypes.STRING,
    ingredients: DataTypes.TEXT,
    directions: DataTypes.TEXT,
    cook_time: DataTypes.INTEGER,
    total_calories: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};