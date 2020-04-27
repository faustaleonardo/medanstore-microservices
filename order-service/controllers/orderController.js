const { v4: uuidv4 } = require('uuid');
const axios = require('axios');

const models = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');
const { filterFields } = require('../utils/filter');

const acceptedFields = ['items'];

const getItemAssociated = async (itemId) => {
  try {
    const { data } = await axios.get(
      `http://35.185.178.158/item-service/${itemId}`
    );
    const item = data.data.data;
    return item;
  } catch (err) {
    return null;
  }
};

exports.getOrders = async (ctx) => {
  const userId = ctx.state.user.id;

  const orders = await models.Order.findAll({ where: { userId } });
  sendSuccessResponse(ctx, orders);
};

exports.getOrdersAndItems = async (ctx) => {
  const userId = ctx.state.user.id;
  const orderId = ctx.params.orderId;

  const orders = await models.Order.findAll({
    where: { userId, orderId },
    order: [['createdAt', 'DESC']],
  });

  let item;
  for (order of orders) {
    item = await getItemAssociated(order.itemId);
    order.dataValues.item = item;
  }

  sendSuccessResponse(ctx, orders);
};

exports.getOrder = async (ctx) => {
  const orderId = ctx.params.orderId;

  try {
    const order = await models.Order.findAll({ where: { orderId } });
    sendSuccessResponse(ctx, order);
  } catch (err) {
    ctx.throw(404, `Order not found`);
  }
};

exports.createOrder = async (ctx) => {
  const filteredBody = filterFields(ctx.request.body, acceptedFields);

  const userId = ctx.status.user.id;
  const orderId = uuidv4();

  const data = [];
  for (let { id, quantity, totalPrice } of filteredBody.items) {
    data.push({
      orderId,
      userId,
      itemId: id,
      quantity,
      totalPrice,
    });
  }

  const orders = await models.Order.bulkCreate(data, { returning: true });

  sendSuccessResponse(ctx, orders, 201);
};
