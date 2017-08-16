/**
 * 使用socket.io
 * 运行：node socket.io.js
 *
 * 客户端js可以使用 http://localhost:3000/socket.io/socket.io.js 获取
 */

var io = require('socket.io')();

//监听用户连接
io.on('connection', function(socket){
    //接收用户数据
    socket.on('data', function (data) {
        console.log(data);
        //向客户端发送数据
        socket.emit('res', data);
    });

    socket.on('data2', function (data) {
        console.log(data);
        socket.emit('res2', data);
    });
});
io.listen(3000);

console.log('Server Linstening on 3000');