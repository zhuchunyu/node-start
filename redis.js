/**
 * 使用redis数据库(redis是内存数据库，用于缓存、队列、分布式聊天室)
 * 运行: node redis.js
 */

//创建redis客户端
const redis = require("redis"),
    client = redis.createClient({host:'redis', port:6379});

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

