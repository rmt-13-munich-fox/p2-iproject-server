'use strict';
const {
  Model
} = require('sequelize');
const {
  hashPassword
} = require('../helpers/bcryptHelper');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Post, {
        foreignKey: "userId"
      })
      User.belongsToMany(models.Post, {
        as: "bookmarkPosts",
        through: models.Bookmark,
        foreignKey: "userId"
      })
    }
  };
  User.init({
    username: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "username aa can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "username aab can't be empty"
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      unique: {
        msg: 'email is already exist'
      },
      allowNull: {
        args: false,
        msg: "email can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "email can't be empty"
        },
        isEmail: {
          msg: "invalid email format"
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "password can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "password can't be empty"
        }
      }
    },
    avatarImg: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "avatarImg can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "avatarImg can't be empty"
        }
      }
    },
    role: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "role can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "role can't be empty"
        }
      }
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        user.password = hashPassword(user.password);
      }
    },
    sequelize,
    modelName: 'User',
  });
  return User;
};