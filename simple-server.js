/**
 * 简单web服务器 (web框架express/koa底层库)
 * 运行: node simple-server.js  或者(自动重启) nodemon simple-server.js
 * 访问：http://localhost:3000
 */

const http = require("http");

http.createServer(function(request, response){
    response.writeHead(200,{"Content-Type":"text/plain"});
    response.write("Hello World");
    response.end();
}).listen(3000);

console.log('Server Linstening on 3000');