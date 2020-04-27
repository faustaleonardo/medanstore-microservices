exports.sendSuccessResponse = (ctx, data, statusCode = 200) => {
  ctx.status = statusCode;

  ctx.body = {
    status: 'success',
    data: {
      data,
    },
  };
};
