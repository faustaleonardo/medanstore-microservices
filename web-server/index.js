const Koa = require('koa');
const logger = require('koa-logger');
const send = require('koa-send');
const serve = require('koa-static');

const app = new Koa();

if (process.env.NODE_ENV !== 'production') {
  app.use(logger());
}

const urls = ['signup', 'login', 'items', 'checkout', 'orders', 'admin'];

const root = require('path').join(__dirname, 'client', 'build');
app.use(serve(root));
app.use(async (ctx) => {
  let { url } = ctx.request;
  url = url.split('/')[1].split('?')[0];

  if (urls.includes(url)) {
    await send(ctx, `/index.html`, {
      root,
    });
  }
});

const port = 5050;

app.listen(port, () => {
  console.log(`Web server is running on port: ${port}`);
});
