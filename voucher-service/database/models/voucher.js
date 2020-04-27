'use strict';
module.exports = (sequelize, DataTypes) => {
  const Voucher = sequelize.define('Voucher', {
    discount: DataTypes.SMALLINT,
    code: DataTypes.STRING,
    expiredTime: DataTypes.DATE
  }, {});
  Voucher.associate = function(models) {
    // associations can be defined here
  };
  return Voucher;
};