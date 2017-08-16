/**
 * 使用request发送http请求，请求baidu主页返回。
 * 运行: node simple-server.js  或者(自动重启) nodemon simple-server.js
 * 访问：http://localhost:3000
 */

var http = require("http");
var request = require('request');

http.createServer(function(req, res){
    res.writeHead(200,{"Content-Type":"text/html"});

    //请求百度主页
    request.get('https://www.baidu.com', function (error, response, body) {
        //返回百度主页内容
        res.end(body);
    });
}).listen(3000);

console.log('Server Linstening on 3000');