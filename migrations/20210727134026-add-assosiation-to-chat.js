'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addConstraint('UserChats', {
      fields: ['ChatId'],
      type: 'foreign key',
      name: 'custom_fkey_ChatId',
      references: { //Required field
        table: 'Chats',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeConstraing('UserChats', 'custom_fkey_ChatId')
  }
};
