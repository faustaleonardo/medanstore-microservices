const axios = require('axios');
const { verifyJwtToken } = require('../utils/jwt');

exports.requireLogin = async (ctx, next) => {
  const { token } = ctx.request.body;

  if (!token) {
    ctx.throw(401, 'You are not logged in. Please log in to get access!');
  }

  const { user } = await verifyJwtToken(token);
  if (!user) {
    ctx.throw(403, 'Invalid Token!');
  }

  // get to know whether user is still registered
  try {
    const response = await axios.get(
      `https://medanstore.xyz/user-service/users/${user.id}`
    );
    const existingUser = response.data.data.data;

    ctx.state.user = existingUser;
    await next();
  } catch (err) {
    ctx.throw(401, err.message);
  }
};
