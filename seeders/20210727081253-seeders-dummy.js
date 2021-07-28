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
     password: "$2b$07$ZRWHHP.9qw22MZO1rKLd2ueITd33V2wkC257EvmcmKSD/1WiMNWBu",
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
      email: "user1@mail.com",
      username: "user1",
      password: "$2b$07$ZRWHHP.9qw22MZO1rKLd2ueITd33V2wkC257EvmcmKSD/1WiMNWBu",
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
