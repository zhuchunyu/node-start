/**
 * 简单koa app
 */

const Koa = require('koa');
const app = new Koa();

//中间件
app.use(async (ctx, next) => {
    //do something
    await next();
});

// response
app.use(ctx => {
    ctx.body = 'Hello Koa';
});

app.listen(3000);

console.log('Server Linstening on 3000');
