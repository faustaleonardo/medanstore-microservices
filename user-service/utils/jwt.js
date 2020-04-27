const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.signJwtToken = (user) => {
  return jwt.sign({ user }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

exports.verifyJwtToken = async (token) => {
  return await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
};
