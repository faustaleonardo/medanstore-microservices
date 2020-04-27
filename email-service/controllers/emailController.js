const Email = require('../utils/email');
const { sendSuccessResponse } = require('../utils/response');

exports.sendPaymentReminder = async (ctx) => {
  const { user, orderId, url } = ctx.request.body;

  await new Email(user, orderId, url).sendPaymentReminder();

  sendSuccessResponse(ctx, 'Email sent!');
};
