'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      User.belongsToMany(models.Chat, {through: "UserChat", foreignKey: "UserId"})
    }
  };
  User.init({
    allowNull: false,
    unique: true,
    username: {
      type: DataTypes.STRING,
      validate: {
        notNull: {
          args: true,
          msg: "Please insert your username correctly"
        },
        notEmpty: {
          args: true, 
          msg: "Please insert your username correctly"
        }
      }
    }
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};