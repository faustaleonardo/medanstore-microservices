const Koa = require('koa');
const bodyParser = require('koa-body');
const logger = require('koa-logger');
const { sequelize } = require('./database/models');

const app = new Koa();
const voucherRouter = require('./routes/voucherRoutes');

require('dotenv').config();
if (process.env.NODE_ENV !== 'production') {
  app.use(logger());
}

app.use(bodyParser());
app.use(voucherRouter.routes());

// global error handling
app.use(async (ctx, next) => {
  try {
    await next();
  } catch (err) {
    ctx.status = err.status || 500;
    ctx.body = err.result;
    ctx.app.emit('error', err, ctx);
  }
});
app.on('error', (err, ctx) => {
  console.log(err);
});

const port = 5009;
sequelize.sync().then(() => {
  app.listen(port, async () => {
    console.log(`Voucher Service is running on port ${port}`);
  });
});
