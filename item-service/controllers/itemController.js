const axios = require('axios');

const models = require('../database/models');
const { Sequelize } = require('../database/models');
const { sendSuccessResponse } = require('../utils/response');
const { filterFields } = require('../utils/filter');

const acceptedFields = [
  'name',
  'price',
  'description',
  'stock',
  'condition',
  'cpu',
  'display',
  'ram',
  'storage',
  'battery',
  'rearCamera',
  'frontCamera',
  'os',
  'network',
  'categoryId',
];

const convertToArray = (data) => (data instanceof Array ? [...data] : [data]);

const getPicturesAssociated = async ({ id }) => {
  const { data } = await axios.get(`http://localhost:5004/items/${id}`);
  const pictures = data.data.data;
  return pictures;
};

const getCategoryAssociated = async ({ id }) => {
  const { data } = await axios.get(`http://localhost:5002/categories/${id}`);
  const category = data.data.data;
  return category;
};

/**-------start: get all items------- */
exports.getItems = async (ctx) => {
  const { page } = ctx.query;

  const items = await models.Item.findAll({
    order: [['id', 'ASC']],
    offset: (page - 1) * 9,
    limit: 9,
  });
  sendSuccessResponse(ctx, items);
};

exports.getItemsAndPictures = async (ctx) => {
  const { sort_by, sort, condition, categoryId, search, page } = ctx.query;

  const arrCondition = convertToArray(condition);
  const arrCategoryId = convertToArray(categoryId);

  // querying
  const whereQuery = { where: {} };
  if (condition) {
    whereQuery.where.condition = { [Sequelize.Op.in]: arrCondition };
  }
  if (categoryId) {
    whereQuery.where.categoryId = { [Sequelize.Op.in]: arrCategoryId };
  }

  // searching
  if (search) {
    whereQuery.where.name = {
      [Sequelize.Op.like]: `%${search}%`,
    };
  }

  // sorting
  let sortByValue = sort_by || 'id';
  let sortValue = sort || 'ASC';
  if (sortByValue === 'latest') {
    sortByValue = 'createdAt';
    sortValue = 'DESC';
  }

  // pagination
  const paginate = {
    offset: (page - 1) * 9,
    limit: 9,
  };
  const items = await models.Item.findAll({
    ...whereQuery,
    order: [[sortByValue, sortValue]],
    ...paginate,
  });

  let pictures;
  for (item of items) {
    pictures = await getPicturesAssociated(item);
    item.dataValues.pictures = pictures;
  }

  sendSuccessResponse(ctx, items);
};
/**-------end: get all items------- */

/**-------start: get one item------- */
exports.getItem = async (ctx) => {
  const { id } = ctx.params;

  const item = await models.Item.findByPk(id);
  if (!item) ctx.throw(404, `Item not found`);

  sendSuccessResponse(ctx, item);
};

exports.getItemAndPictures = async (ctx) => {
  const { id } = ctx.params;

  const item = await models.Item.findOne({
    where: { id },
  });
  if (!item) ctx.throw(404, 'Item not found');

  const pictures = await getPicturesAssociated(item);
  item.dataValues.pictures = pictures;

  sendSuccessResponse(ctx, item);
};

exports.getItemCategoryAndPictures = async (ctx) => {
  const { id } = ctx.params;

  const item = await models.Item.findOne({
    where: { id },
  });
  if (!item) ctx.throw(404, 'Item not found');

  const pictures = await getPicturesAssociated(item);
  item.dataValues.pictures = pictures;

  const category = await getCategoryAssociated(item);
  item.dataValues.category = category;

  sendSuccessResponse(ctx, item);
};
/**-------end: get one item------- */

exports.createItem = async (ctx) => {
  const filteredBody = filterFields(ctx.request.body, acceptedFields);

  item = await models.Item.create(filteredBody);

  sendSuccessResponse(ctx, item, 201);
};

exports.updateItem = async (ctx) => {
  const { id } = ctx.params;
  const item = await models.Item.findByPk(id);
  if (!item) ctx.throw(404, `Item not found`);

  const filteredBody = filterFields(ctx.request.body, acceptedFields);
  for (let key in filteredBody) item[key] = filteredBody[key];
  await item.save();

  sendSuccessResponse(ctx, item);
};

exports.deleteItem = async (ctx) => {
  const { id } = ctx.params;

  const item = await models.Item.findByPk(id);
  if (!item) ctx.throw(404, `Item not found`);

  await models.Item.destroy({ where: { id } });

  sendSuccessResponse(ctx, null, 204);
};
