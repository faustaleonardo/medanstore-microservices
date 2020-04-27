const { sendSuccessResponse } = require('../utils/response');

require('dotenv').config();
const rajaOngkir = require('rajaongkir-nodejs').Starter(
  process.env.RAJA_ONGKIR_API_KEY
);

const getData = async (id, quantity, courier) => {
  const data = [];
  let response, result;

  const params = {
    origin: 152,
    destination: id,
    weight: 200 * quantity,
  };

  switch (courier) {
    case 'jne':
      response = await rajaOngkir.getJNECost(params);
      break;
    case 'pos':
      response = await rajaOngkir.getPOSCost(params);
      break;
    case 'tiki':
      response = await rajaOngkir.getTIKICost(params);
      break;
    default:
      break;
  }

  result = response.rajaongkir.results[0];
  result.costs.forEach((el) => {
    data.push({ name: result.code + '-' + el.service, cost: el.cost });
  });

  return data;
};

exports.getCities = async (ctx) => {
  try {
    const cities = await rajaOngkir.getCities();
    sendSuccessResponse(ctx, cities);
  } catch (err) {
    ctx.throw(500, err);
  }
};
exports.getCosts = async (ctx) => {
  try {
    const { id } = ctx.params;
    const { quantity } = ctx.query;

    let costs = [];

    costs.push(await getData(id, quantity, 'jne'));
    costs.push(await getData(id, quantity, 'pos'));
    costs.push(await getData(id, quantity, 'tiki'));

    costs = costs.flat();
    sendSuccessResponse(ctx, costs);
  } catch (err) {
    ctx.throw(500, err);
  }
};
