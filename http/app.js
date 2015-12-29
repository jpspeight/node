/**
 * Created by jspeight on 12/26/15.
 */
var http = require('http');
var fs = require('fs');
var gzip = require('zlib').createGzip();



var readStream = fs.createReadStream('cool.txt');
var writeStream = fs.createWriteStream('cool.txt.gzip');
readStream.pipe(gzip).pipe(writeStream);
readStream.pipe(process.stdout);


var server = http.createServer(function(req, res){
   console.log('request headers');
  // console.log(req.headers);
    //console.log(req.method);
    //console.log(req.url);
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200, {'content-type': 'text/html'});
        fs.createReadStream('./public/index.html').pipe(res);
    }



    //res.write('hello client');
    //res.end();
}).listen(3000);
console.log('Server listening on 3000');



/*var options = {
    hostname: 'www.pepperdine.edu',
    port: 80,
    path: 'index.htm',
    method: 'GET'
};*/

/*var item = require('./lib/index');
item.sayA('james');
item.sayB('james');


var path = require('path');
console.log(path.join('james', 'Desktop', 'mainFrame'));

var workingPath = path.join(__filename);
console.log(path.extname(workingPath));
console.log(path.basename(workingPath));
console.log(path.dirname(workingPath));*/



/*http.get(options, function(res){
    var body = '';

    res.on('data', function(data){
        body += data;
        console.log(data.toString());
    });

    res.on('end', function(){
       // var result = JSON.parse(body);
        //callback(result);
    });

}).on('error', function(e){
    console.log('Error: ' + e);
});*/