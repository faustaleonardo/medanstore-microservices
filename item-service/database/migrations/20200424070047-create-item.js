'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Items', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.DECIMAL,
        allowNull: false,
      },
      description: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      stock: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      condition: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpu: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      storage: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      display: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      ram: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      battery: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      rearCamera: {
        type: Sequelize.TEXT,
        allowNull: false,
      },
      frontCamera: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      os: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      network: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      categoryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Items');
  },
};
