'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Bookmark.belongsTo(models.User)
    }
  };
  Bookmark.init({
    UserId: {
      type : DataTypes.INTEGER,
      references : {
        model : "User",
        key  :" id"
      }
    },
    NewsId:{
      type : DataTypes.INTEGER,
      references : {
        model : "News",
        key  :" id"
      }
    },
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};