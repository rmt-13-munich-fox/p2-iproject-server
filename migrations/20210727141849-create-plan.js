'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Plans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      day: {
        type: Sequelize.INTEGER
      },
      image_url: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      descriptions: {
        type: Sequelize.TEXT
      },
      hotel: {
        type: Sequelize.STRING
      },
      TravelId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Travels",
          key: "id"
        },
        onUpdate: "cascade",
        onDelete: "cascade"
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Plans');
  }
};