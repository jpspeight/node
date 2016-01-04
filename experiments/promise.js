/**
 * Created by jspeight on 12/30/15.
 */
    'use strict';
const file = 'james.txt';
const fs = require('fs');
const readStream = fs.createReadStream(file);
const emitter = require('events').EventEmitter();
var writeData = new Date().toString();
var readData = '';

var writePromise = function(file, data, callback) {
    return new Promise(function (resolve, reject) {
        let dataWrite = data + "\n";
        fs.writeFile(file, dataWrite, {'encoding': 'utf-8', 'flag' : 'a'}, function(err){
            if(err){
               return callback(new Error('File can\'t be written'));
            }
            callback(null, dataWrite);
            resolve(dataWrite);
        });
    });
};

//process.stdin.on('data', function(data){
        var filePromise = writePromise(file, writeData, callback);
        filePromise.then(function(data){
            readStream.setEncoding('utf8');
            readStream.on('readable', function(chunk){
                while((chunk = readStream.read()) != null){
                    readData += chunk;
                }
            }).on('end', function(){
                console.log(readData);
        });

    });
//});







function callback(err, data){
    if(err){
        console.log(err);
        process.exit(1);
        return;
    }
   // console.log(data);
}