'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Sentiments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      NewsId: {
        type: Sequelize.INTEGER
      },
      tokens: {
        type: Sequelize.TEXT
      },
      positive_words: {
        type: Sequelize.TEXT
      },
      negative_words: {
        type: Sequelize.TEXT
      },
      stop_words: {
        type: Sequelize.TEXT
      },
      comperative: {
        type: Sequelize.FLOAT
      },
      score: {
        type: Sequelize.INTEGER
      },
      calculation: {
        type: Sequelize.TEXT
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
    await queryInterface.dropTable('Sentiments');
  }
};