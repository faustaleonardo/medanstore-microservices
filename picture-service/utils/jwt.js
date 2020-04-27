const jwt = require('jsonwebtoken');
const { promisify } = require('util');

exports.verifyJwtToken = async (token) => {
  return await promisify(jwt.verify)(token, process.env.JWT_SECRET_KEY);
};
