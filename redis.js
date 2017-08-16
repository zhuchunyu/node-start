/**
 * 使用redis数据库(redis是内存数据库，用于缓存)
 * 运行: node redis.js
 */

//创建redis客户端
var redis = require("redis"),
    client = redis.createClient({host:'192.168.1.125', port:6379});

client.on("error", function (err) {
    console.log("Error " + err);
});

//设置键值
client.set("key1", "values", function (err, reply) {
    console.log(reply);
});

//获取键值
client.get('key1', function (err, value) {
    console.log(value);
});

