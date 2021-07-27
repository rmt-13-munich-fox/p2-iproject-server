'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   await queryInterface.bulkInsert('Users', [
     {
     email: "admin@mail.com",
     username: "admin",
     password: "adminmarmut",
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
      email: "user1@mail.com",
      username: "user1",
      password: "user1",
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {})
  }
};
