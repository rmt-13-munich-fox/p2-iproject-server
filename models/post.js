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
      Post.belongsTo(models.Tag, {
        foreignKey: 'tagId'
      })
      Post.belongsTo(models.User, {
        foreignKey: 'userId'
      })
      Post.belongsToMany(models.User, {
        as: "bookmarkUsers",
        through: models.Bookmark,
        foreignKey: 'postId'
      })
    }
    // Post
    // .findOne({
    //   where:{
    //     id
    //   },
    //   include:[{
    //     model: User
    //   }, "bookmarkUsers"]
    // })
    // Bookmark
    //   .findOne({
    //     where: {
    //       userId: 1
    //     },
    //     include: [{
    //       model: User
    //     }, {
    //       model: Post
    //     }]
    //   })
  };
  Post.init({
    title: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "title can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "title can't be empty"
        }
      }
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: {
        args: false,
        msg: "description can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "description can't be empty"
        }
      }
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: {
        args: false,
        msg: "thumbnail can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "thumbnail can't be empty"
        }
      }
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "userId can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "userId can't be empty"
        }
      },
      references: {
        model: "Users",
        key: "id"
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    },
    tagId: {
      type: DataTypes.INTEGER,
      allowNull: {
        args: false,
        msg: "tagId can't be empty"
      },
      validate: {
        notEmpty: {
          msg: "tagId can't be empty"
        }
      },
      references: {
        model: "Tags",
        key: "id"
      },
      onDelete: 'cascade',
      onUpdate: 'cascade',
    }
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};