'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Post.belongsTo(models.User, { foreignKey: 'userId' })      
    }
  };
  Post.init({
    userId: DataTypes.INTEGER,
    imgUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please input your imgUrl'
        },
        notEmpty: {
          msg: 'Imgurl cannot be empty'
        },
        isUrl: {
          msg: 'Must be url formatted'
        }
      }
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Please input your email'
        },
        notEmpty: {
          msg: 'Email cannot be empty'
        }
      }
    },
    description: DataTypes.TEXT
  }, {
    hooks: {
      beforeCreate(post, option) {
        if (!post.description) {
          post.description = 'No description'
        }
      }
    },
    sequelize,
    modelName: 'Post',
  });
  return Post;
};