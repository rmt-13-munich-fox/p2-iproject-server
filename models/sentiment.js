'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sentiment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Sentiment.init({
    NewsId: DataTypes.INTEGER,
    tokens: DataTypes.TEXT,
    positive_words: DataTypes.TEXT,
    negative_words: DataTypes.TEXT,
    stop_words: DataTypes.TEXT,
    comperative: DataTypes.FLOAT,
    score: DataTypes.INTEGER,
    calculation: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Sentiment',
  });
  return Sentiment;
};