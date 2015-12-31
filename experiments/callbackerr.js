/**
 * Created by jspeight on 12/30/15.
 */
'use strict';
const fs = require('fs');

function runError(file, callback){

    fs.readFile(file, function(err, data){
       if(err){
           callback(new Error('This is a error'));
           return;
       }
       callback(null, data.toString());
    });
}

function callback(err, data){
    if(err) {
        console.log(err);
        return;
    }
    console.log(data);
}

var file = 'error.txt';


runError(file, callback);