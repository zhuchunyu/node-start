/**
 * koa运行示例
 * 运行koa: node koa-server.js 或者 nodemon koa-server.js
 */

require('babel-core/register');
require("babel-core").transform("code", {
    plugins: ["transform-runtime"]
});

require('./koa-app');