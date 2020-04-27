const bcrypt = require('bcryptjs');
const models = require('../database/models');
const { promisify } = require('util');

const { sendSuccessResponse } = require('../utils/response');
const { signJwtToken, verifyJwtToken } = require('../utils/jwt');

exports.signup = async (ctx) => {
  const { username, email, password } = ctx.request.body;
  let user;

  user = await models.User.findOne({ where: { username } });
  if (user) {
    ctx.throw(401, 'The username has been taken!');
  }

  user = await models.User.findOne({ where: { email } });
  if (user) {
    ctx.throw(401, 'The email has been registered. Just log in instead!');
  }

  const hashedPassword = await promisify(bcrypt.hash)(password, 10);
  user = await models.User.create({
    username,
    email,
    password: hashedPassword,
  });

  const jwt = signJwtToken(user);

  const credentials = {
    user,
    jwt,
  };

  sendSuccessResponse(ctx, credentials);
};

exports.login = async (ctx) => {
  const { username, password } = ctx.request.body;

  const user = await models.User.findOne({ where: { username } });
  if (!user) {
    ctx.throw(401, 'This email has not been registered!');
  }

  const result = await promisify(bcrypt.compare)(password, user.password);
  if (!result) {
    ctx.throw(401, 'Invalid credentials!');
  }

  const jwt = signJwtToken(user);
  const credentials = {
    jwt,
    user,
  };
  sendSuccessResponse(ctx, credentials);
};

exports.user = async (ctx) => {
  const { headers } = ctx;
  let token;
  if (headers.authorization && headers.authorization.startsWith('Bearer')) {
    token = headers.authorization.split(' ')[1];
  }

  if (!token) {
    ctx.throw(401, 'You are not logged in. Please log in to get access!');
  }

  const { user } = await verifyJwtToken(token);
  if (!user) {
    ctx.throw(403, 'Invalid Token!');
  }

  const existingUser = await models.User.findByPk(user.id);
  if (!existingUser) {
    ctx.throw(401, 'Use does not exist anymore!');
  }

  sendSuccessResponse(ctx, user);
};
