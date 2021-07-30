'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Task.hasMany(models.Subtask, { foreignKey: 'TaskId' })
      Task.hasMany(models.MyTask, { foreignKey: 'TaskId' })
    }
  };
  Task.init({
    name: DataTypes.STRING,
    task: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Task',
  });
  return Task;
};