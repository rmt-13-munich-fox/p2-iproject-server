'use strict';
const bcrypt = require('bcryptjs')
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
      // define association here
      User.belongsToMany(models.Recipe,{as : "Favorites", through : models.Favorite})
    }
  };
  User.init({
    email: {
      type : DataTypes.STRING,
      allowNull:false,
      validate : {
        notNull:{
          args:true,
          msg:"Email cannot be null"
        },
        notEmpty : true,
        isEmail: true
      },
    },
    password: {
      type : DataTypes.STRING,
      allowNull:false,
      validate : {
        notNull:{
          args:true,
          msg:"password cannot be null"
        },
        notEmpty : true
      },
    },
    name: DataTypes.STRING
  }, {
    hooks:{
      beforeCreate:(user,options)=>{
        let salt = bcrypt.genSaltSync(8)
        let hashedPassword = bcrypt.hashSync(user.password, salt);
        user.password = hashedPassword
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};