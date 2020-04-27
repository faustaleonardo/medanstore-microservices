const Koa = require('koa');
const bodyParser = require('koa-body');
const logger = require('koa-logger');

const emailRouter = require('./routes/emailRoutes');

const app = new Koa();

require('dotenv').config();
if (process.env.NODE_ENV !== 'production') {
  app.use(logger());
}

app.use(bodyParser());
app.use(emailRouter.routes());

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

const port = 5007;
app.listen(port, async () => {
  console.log(`Email Service is running on port ${port}`);
});
