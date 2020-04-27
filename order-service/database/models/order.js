'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define(
    'Order',
    {
      orderId: DataTypes.UUID,
      userId: DataTypes.INTEGER,
      itemId: DataTypes.INTEGER,
      quantity: DataTypes.INTEGER,
      totalPrice: DataTypes.DECIMAL,
    },
    {}
  );
  Order.associate = function (models) {
    // associations can be defined here
  };
  return Order;
};
