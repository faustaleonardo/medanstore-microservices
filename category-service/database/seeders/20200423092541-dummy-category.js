'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'Categories',
      [
        {
          value: 'Samsung',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 'Huawei',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 'Apple',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 'Xiaomi',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          value: 'Oppo',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Categories', null, {});
  },
};
