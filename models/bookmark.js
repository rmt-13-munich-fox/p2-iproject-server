'use strict';
const {
  Model
} = require('sequelize');
const {
  Sequelize
} = require('.');
module.exports = (sequelize, DataTypes) => {
  class Bookmark extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      // Bookmark.belongsTo(models.User)
      Bookmark.belongsTo(models.Post, {
        foreignKey: 'postId'
      }) //error pas dimasukin
    }
  };
  Bookmark.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Users",
        key: "id"
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      allowNull: {
        args: false,
        msg: "userId can't be empty"
      }
    },
    postId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Posts",
        key: "id"
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
      allowNull: {
        args: false,
        msg: "postId can't be empty"
      }
    }
  }, {
    sequelize,
    modelName: 'Bookmark',
  });
  return Bookmark;
};