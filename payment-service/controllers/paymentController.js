const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const axios = require('axios');

const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');
const { getExpiredTime } = require('../utils/expire');
const { filterFields } = require('../utils/filter');

const acceptedFields = [
  'discount',
  'deliveryCost',
  'deliveryAddress',
  'courier',
  'finalPrice',
];

// PENDING
const getAuthUserId = () => {
  return 1;
};

// CHECK LATER
const sendEmail = async (user, orderId, url) => {
  // PENDING. Hard coded, later change.
  await axios.post(
    'http://35.185.178.158/email-service/payment-reminder/send',
    {
      user,
      orderId,
      url,
    }
  );
};

exports.getPayments = async (ctx) => {
  const userId = getAuthUserId();
  const { page } = ctx.query;

  const payments = await models.Payment.findAll({
    where: {
      userId,
    },
    order: [['createdAt', 'DESC']],
    offset: (page - 1) * 3,
    limit: 3,
  });

  sendSuccessResponse(ctx, payments);
};

exports.getPayment = async (ctx) => {
  const { id } = ctx.params;

  const payment = await models.Payment.findByPk(id);
  if (!payment) ctx.throw(404, `Payment not found`);

  sendSuccessResponse(ctx, payment);
};

exports.createPayment = async (ctx) => {
  const { orderId } = ctx.params;

  const filteredBody = filterFields(ctx.request.body, acceptedFields);

  const userId = getAuthUserId();
  const expiredTime = getExpiredTime();

  const data = { ...filteredBody, orderId, userId, expiredTime };

  const payment = await models.Payment.create(data);

  let host;
  // if (process.env.NODE_ENV === 'development') host = 'localhost:3000';
  // else host = ctx.host;
  host = ctx.host;

  const url = `${ctx.protocol}://${host}/orders`;

  // PENDING. Hardcoded, later change to user
  const user = { username: 'ursula67', email: 'faustaleonardo11@gmail.com' };

  // not blocking
  sendEmail(user, orderId, url);

  sendSuccessResponse(ctx, payment);
};

exports.finishPayment = async (ctx) => {
  const { orderId } = ctx.params;

  const payment = await models.Payment.findOne({ where: { orderId } });
  if (!payment) ctx.throw('Payment not found');

  // convert IDR to USD
  const response = await axios.get(
    'https://api.exchangeratesapi.io/latest?base=USD&symbols=USD,IDR'
  );
  const finalPrice = payment.finalPrice * 1;
  // stripe store cents. 1 * 100 cents = 1 dollar
  const amount = (finalPrice / response.data.rates.IDR).toFixed(0) * 100;

  ctx.body = amount;

  const { token } = ctx.request.body;
  // charge the payment
  await stripe.charges.create({
    amount: amount,
    currency: 'USD',
    description: `MEDANSTORE XYZ. Pay for the payment ID: ${payment.id}`,
    source: token,
  });

  payment.active = false;
  payment.statusPayment = true;
  await payment.save();

  sendSuccessResponse(ctx, payment);
};

exports.updatePayment = async (ctx) => {
  const { orderId } = ctx.params;

  const payment = await models.Payment.findOne({ where: { orderId } });
  if (!payment) ctx.throw(404, `Payment not found`);

  const { active, statusPayment } = ctx.request.body;

  if (active !== undefined) payment.active = active;
  if (statusPayment !== undefined) payment.statusPayment = statusPayment;

  await payment.save();

  sendSuccessResponse(ctx, payment);
};
