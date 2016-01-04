/**
 * Created by jspeight on 1/1/16.
 */
'use strict';
const fs = require('fs');

const main = require('./promise_lib');

const readStream = fs.createReadStream(main.readFile);
const writeStream = fs.createWriteStream(main.logfile);

readStream.pipe(writeStream);

main.runFile().then(main.openFile);
readStream.on('readable', function(chunk){
    while((chunk = readStream.read()) != null){
        main.readData += chunk;
    }
}).on('end', function(){
    console.log(main.readData);
});




