/**
 * 简单koa app
 * koa核心，其他功能使用扩展的中间件处理，如：日志、回话、参数/表单解析、模板引擎、路由等。
 */

const Koa = require('koa');
const app = new Koa();

const mongoose = require('mongoose');

mongoose.connect('mongodb://mongo:27017/start', {useMongoClient:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected');
});

//创建redis客户端
const redis = require("redis"),
    client = redis.createClient({host:'redis', port:6379});

//中间件
app.use(async (ctx, next) => {
    //do something
    
    await new Promise(function (resolve) {
        client.set('key1', 'value1', function (err, reply) {
            console.log(err);
            console.log(reply);
            
            resolve();
        });
    });
    
    await next();
});

// response
app.use(async (ctx, next) => {
    
    const value = await new Promise(function (resolve) {
        client.get('key1', function (err, value) {
            console.log(err);
            console.log(value);
            
            resolve(value);
        });
    });
    
    ctx.body = `values is ${value}`;
});

app.listen(3072);

console.log('Server Linstening on 3000');
