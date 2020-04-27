const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');
const { filterFields } = require('../utils/filter.js');
const { getExpiredTime } = require('../utils/expire');

const acceptedFields = ['code', 'discount'];

exports.getVouchers = async (ctx) => {
  const vouchers = await models.Voucher.findAll();
  sendSuccessResponse(ctx, vouchers);
};

exports.getVoucher = async (ctx) => {
  const { id } = ctx.params;

  const voucher = await models.Voucher.findByPk(id);
  if (!voucher) ctx.throw(404, `Voucher not found`);

  sendSuccessResponse(ctx, voucher);
};

exports.getVoucherByCode = async (ctx) => {
  const { code } = ctx.params;

  const voucher = await models.Voucher.findOne({ where: { code } });
  if (!voucher) ctx.throw(404, `Voucher not found`);

  if (voucher && voucher.expiredTime < Date.now()) {
    ctx.throw(401, 'Voucher has expired');
  }

  sendSuccessResponse(ctx, voucher);
};

exports.createVoucher = async (ctx) => {
  const { code } = ctx.request.body;
  let voucher = await models.Voucher.findOne({ where: { code } });
  if (voucher) ctx.throw(401, 'The code has existed!');

  const filteredBody = filterFields(ctx.request.body, acceptedFields);
  filteredBody.expiredTime = getExpiredTime();

  voucher = await models.Voucher.create(filteredBody);

  sendSuccessResponse(ctx, voucher, 201);
};

exports.updateVoucher = async (ctx) => {
  const { id } = ctx.params;
  const { code } = ctx.request.body;

  const voucherByCode = await models.Voucher.findOne({ where: { code } });
  const voucher = await models.Voucher.findByPk(id);
  if (voucherByCode && voucher.code !== code) {
    ctx.throw(401, `The ${code} voucher has existed!`);
  }

  if (!voucher) ctx.throw(404, `Voucher not found`);

  const filteredBody = filterFields(ctx.request.body, acceptedFields);
  for (let key in filteredBody) voucher[key] = filteredBody[key];
  await voucher.save();

  sendSuccessResponse(ctx, voucher);
};

exports.deleteVoucher = async (ctx) => {
  const { id } = ctx.params;

  const voucher = await models.Voucher.findByPk(id);
  if (!voucher) ctx.throw(404, `Voucher not found`);

  await models.Voucher.destroy({ where: { id } });

  sendSuccessResponse(ctx, null, 204);
};
