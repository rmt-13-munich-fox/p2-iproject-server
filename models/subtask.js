'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Subtask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Subtask.init({
    TaskId: DataTypes.INTEGER,
    subtask: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Subtask',
  });
  return Subtask;
};