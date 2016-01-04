'use strict';
const events = require('events');
const net = require('net');
const channel = new events.EventEmitter();
channel.clients = {};
channel.subscriptions = {};

channel.on('join', function(id, client) {
    let _id = client.remoteAddress + ':' + client.remotePort;
    console.log(`${_id} joined`);

    this.clients[id] = client;
    this.subscriptions[id] = function(senderId, message) {
        if (id != senderId) {
            this.clients[id].write(message);
            //this.clients[id].write('joined the chat');

        }
    };
   // console.log(this.subscriptions[id]);
    this.on('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, id + " joined.\n");
});

channel.on('open', function(){
    console.log(this);
    this.emit('broadcast', '', "opening!.\n");
});

channel.on('leave', function(id) {
    channel.removeListener('broadcast', this.subscriptions[id]);
    channel.emit('broadcast', id, id + " has left the chat.\n");
});

channel.on('shutdown', function() {
    channel.emit('broadcast', '', "Chat has shut down.\n");
    channel.removeAllListeners('broadcast');
});

var server = net.createServer(function (client) {
    var id = client.remoteAddress + ':' + client.remotePort;
    channel.emit('join', id, client);
    client.on('data', function(data) {
        data = data.toString();
        if (data == "shutdown\r\n") {
            channel.emit('shutdown');
        }
        if (data === "open\r\n"){
            channel.emit('open');
        }
        channel.emit('broadcast', id, data); //pass sendID and message
    });
    client.on('close', function() {
        channel.emit('leave', id);
    });
});
server.listen(8888);
