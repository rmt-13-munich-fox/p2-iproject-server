'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const tags = [{
      name: "make-up",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "skincare",
      createdAt: new Date(),
      updatedAt: new Date()
    }, {
      name: "fashion",
      createdAt: new Date(),
      updatedAt: new Date()
    }]
    await queryInterface.bulkInsert('Tags', tags, {})
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Tags', null, {})
  }
};