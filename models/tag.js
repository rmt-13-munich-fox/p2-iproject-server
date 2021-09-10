'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tag extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Tag.hasMany(models.Post, {
        foreignKey: 'tagId'
      })
    }
  };
  Tag.init({
    name: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "name can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "name can't be empty"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Tag',
  });
  return Tag;
};