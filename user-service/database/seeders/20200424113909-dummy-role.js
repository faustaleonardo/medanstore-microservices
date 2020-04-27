'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Roles',
      [
        {
          value: 'admin',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        { value: 'user', createdAt: new Date(), updatedAt: new Date() },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Roles', null, {});
  },
};
