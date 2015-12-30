/**
 * Created by jspeight on 12/29/15.
 */
var http = require('http');
var options = {
    host: '107.204.105.234',
    port: 9561,
    path: '/items',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json'
    }
};

var req = http.request(options, function(res) {

});
req.on('error', function(e) {
    console.log('problem with request: ' + e.message);

});
req.end();