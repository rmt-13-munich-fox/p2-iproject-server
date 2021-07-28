'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      username: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: "username test can't be empty"
        }
      },
      email: {
        type: Sequelize.STRING,
        unique: {
          args: true,
          msg: 'email is already exist'
        },
        allowNull: {
          args: false,
          msg: "email can't be empty"
        }
      },
      password: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: "password can't be empty"
        }
      },
      avatarImg: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: "avatarImg can't be empty"
        }
      },
      role: {
        type: Sequelize.STRING,
        allowNull: {
          args: false,
          msg: "role can't be empty"
        }
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
    await queryInterface.dropTable('Users');
  }
};