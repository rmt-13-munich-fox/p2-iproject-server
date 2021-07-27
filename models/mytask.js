'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class MyTask extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  MyTask.init({
    UserId: DataTypes.INTEGER,
    TaskId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'MyTask',
  });
  return MyTask;
};