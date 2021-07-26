'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  News.init({
    news_id : DataTypes.STRING,
    title: DataTypes.TEXT,
    author: DataTypes.STRING,
    description: DataTypes.TEXT,
    url: DataTypes.TEXT,
    image_url: DataTypes.TEXT,
    category: DataTypes.STRING,
    published: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};