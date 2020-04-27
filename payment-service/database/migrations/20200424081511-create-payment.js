'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Payments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      orderId: {
        type: Sequelize.UUID,
        allowNull: false,
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      discount: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      deliveryCost: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      deliveryAddress: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      courier: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      finalPrice: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      statusPayment: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      expiredTime: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      active: {
        type: Sequelize.BOOLEAN,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Payments');
  },
};
