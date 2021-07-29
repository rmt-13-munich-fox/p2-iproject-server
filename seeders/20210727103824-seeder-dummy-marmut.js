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
   await queryInterface.bulkInsert('Marmuts', [
     {
     name: "Chess",
     gender: "Sow (Female)",
     imgURL: "https://ik.imagekit.io/waknkqe0dx5v/Screen_Shot_2021-07-27_at_5.43.21_PM_uplylFecN-.png?updatedAt=1627382645187",
     age: 2,
     submittedBy: "Garry",
     description: "Chess was our first guinea pig! She is a very naughty guinea pig but she is very cute, she likes eating grass so much.",
     createdAt: new Date(),
     updatedAt: new Date()
     },
     {
      name: "Key",
      gender: "Sow (Female)",
      imgURL: "https://ik.imagekit.io/waknkqe0dx5v/Screen_Shot_2021-07-27_at_5.43.01_PM_6ifHDKIBL.png?updatedAt=1627382644876",
      age: 2,
      submittedBy: "Garry",
      description: "Key was the second guinea pig that we adopted, she is more of a stronger woman compared to chess, she really hates to be touched, but we love her nonetheless!",
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
    await queryInterface.bulkDelete('Marmuts', null, {})
  }
};
