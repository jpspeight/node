var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
    res.sendfile('index.html');
});

io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('disconnect', function(){
        console.log('user disconnected');
    });
    socket.on('chat message', function(msg){
        console.log('message: ' + msg);
        io.emit('run message', msg);
    });

    socket.on('tweet', function(){
        console.log('tweet button');
        io.emit('tweet display');
    });
});

http.listen(3000, function(){
    console.log('listening on *:3000');
});