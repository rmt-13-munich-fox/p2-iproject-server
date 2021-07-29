'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    let data = require('../data/category.json')
    let category = data.map(el => {
      el.createdAt = new Date()
      el.updatedAt = new Date()
      return el
    })
    console.log(category, 'category');
    return queryInterface.bulkInsert('Categories', category, {})
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     return queryInterface.bulkDelete('Categories', null, {})
  }
};
