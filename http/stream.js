/**
 * Created by jspeight on 12/27/15.
 */
var fs = require('fs');
var util = require('util');
var readStream = fs.createReadStream('cool.txt');
var writeStream = fs.createWriteStream('coolpipe.txt');

readStream.pipe(writeStream);

//CHILD PROCESS STREAM EXAMPLE
/*var child_process = require('child_process');
var child = child_process.exec('ls', ['-la']);
child.stdout.pipe(process.stdout);*/

//READ STREAM EXAMPLE
/*var data = '';
var chunk;
readStream.setEncoding('utf8');

readStream.on('readable', function(chunk){
    while((chunk = readStream.read()) != null){
        data += chunk;
    }
});

readStream.on('end', function(){
    //console.log(data);
});*/

//WRITE STREAM EXAMPLE
/*var writeStream = fs.createWriteStream('cool2.txt');
writeStream.write("foo bar\n");
writeStream.end("bas");*/

//MEMORY USAGE
//console.log(util.inspect(process.memoryUsage()));