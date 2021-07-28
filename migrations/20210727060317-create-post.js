'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: "title can't be empty"
        }
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: {
          args: false,
          msg: "description can't be empty"
        }
      },
      thumbnail: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: "thumbnail can't be empty"
        }
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: {
          args: false,
          msg: "userId can't be empty"
        },
        references: {
          model: "Users",
          key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      tagId: {
        type: Sequelize.INTEGER,
        allowNull: {
          args: false,
          msg: "tagId can't be empty"
        },
        references: {
          model: "Tags",
          key: "id"
        },
        onDelete: 'cascade',
        onUpdate: 'cascade',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Posts');
  }
};