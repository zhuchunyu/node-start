/**
 * 使用mongoose连接mongodb
 * 运行: node mongodb.js
 */

const mongoose = require('mongoose');

mongoose.connect('mongodb://192.168.1.125:27017/start', {useMongoClient:true});

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    // we're connected!
    console.log('connected');
});

//定义模型
const helloSchema = mongoose.Schema({
    name: String,
    created:Date
});

const Hello = mongoose.model('Hello', helloSchema);

//保存数据
const silence = new Hello({ name: 'jack', created:new Date() });

silence.save().then(function () {
    console.log('saved');
});

//查询数据
Hello.find({name:'jack'}).exec().then(function (data) {
    console.log(data);
}).catch(function (err) {
    console.log(err.toString());
});