'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    const totalDays = 5 * 24 * 60 * 60 * 1000;
    const fiveDaysFromToday = new Date(new Date().getTime() + totalDays);

    return queryInterface.bulkInsert(
      'Vouchers',
      [
        {
          discount: 10,
          expiredTime: fiveDaysFromToday,
          code: 'happy10',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          discount: 20,
          expiredTime: fiveDaysFromToday,
          code: 'nice20',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          discount: 30,
          expiredTime: fiveDaysFromToday,
          code: 'huge30',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('People', null, {});
  },
};
