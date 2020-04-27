const models = require('../database/models');

const { sendSuccessResponse } = require('../utils/response');

exports.getCategories = async (ctx) => {
  const categories = await models.Category.findAll({ order: [['id', 'ASC']] });
  sendSuccessResponse(ctx, categories);
};

exports.getCategory = async (ctx) => {
  const { id } = ctx.params;

  const category = await models.Category.findByPk(id);
  if (!category) ctx.throw(404, `Category not found`);

  sendSuccessResponse(ctx, category);
};

exports.createCategory = async (ctx) => {
  const { value } = ctx.request.body;

  let category = await models.Category.findOne({ where: { value } });
  if (category) ctx.throw(401, `The ${value} category has existed!`);

  category = await models.Category.create({ value });

  sendSuccessResponse(ctx, category, 201);
};

exports.updateCategory = async (ctx) => {
  const { id } = ctx.params;
  const { value } = ctx.request.body;

  let category = await models.Category.findOne({ where: { value } });
  if (category) ctx.throw(401, `The ${value} category has existed!`);

  category = await models.Category.findByPk(id);
  if (!category) ctx.throw(404, `Category not found`);

  category.value = value;
  await category.save();

  sendSuccessResponse(ctx, category);
};

exports.deleteCategory = async (ctx) => {
  const { id } = ctx.params;

  const category = await models.Category.findByPk(id);
  if (!category) ctx.throw(404, `Category not found`);

  await models.Category.destroy({ where: { id } });

  sendSuccessResponse(ctx, null, 204);
};
