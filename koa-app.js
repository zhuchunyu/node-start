/**
 * 简单koa app
 * koa核心，其他功能使用扩展的中间件处理，如：日志、回话、参数/表单解析、模板引擎、路由等。
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
