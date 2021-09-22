'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Favorites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      userid: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Users',
          key : 'id',
        },
        onUpdate :'CASCADE',
        onDelete : 'CASCADE'
      },
      recipeId: {
        type: Sequelize.INTEGER,
        references : {
          model : 'Recipes',
          key : 'id',
        },
        onUpdate :'CASCADE',
        onDelete : 'CASCADE'
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
    await queryInterface.dropTable('Favorites');
  }
};