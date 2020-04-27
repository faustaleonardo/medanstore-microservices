const Koa = require('koa');
const bodyParser = require('koa-body');
const logger = require('koa-logger');
const shippingRouter = require('./routes/shippingRoutes');

const app = new Koa();

require('dotenv').config();
if (process.env.NODE_ENV !== 'production') {
  app.use(logger());
}

app.use(bodyParser());
app.use(shippingRouter.routes());

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

const port = 5008;

app.listen(port, async () => {
  console.log(`Shipping Service is running on port ${port}`);
});
