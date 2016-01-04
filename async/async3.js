/**
 * Created by filmjunkiecinema on 11/22/15.
 */
var async = require('async');
var fs = require('fs');
var prompt = require('prompt');
var file = 'fileResults.txt';
var idea = '';

function writeFile(callback){
    var message = '';
    message += idea;
    message += "\nWelcome new guys\nThis is a new day.\nGoodBye";

        fs.writeFile(file, message, function(err){
            if(err){
                console.log(err);
            }
            var successMessage = 'I wrote the file.';
            callback(null, successMessage);
        });

}

function readFile(callback){
    fs.stat(file, function(err, stats) {
        if (err) {
            callback(err);
        }
        if (stats.isFile()) {
            //console.log('reading file!!!');
            fs.readFile(file, function(err, data){
                var fileData = data.toString();
                //console.log('Read File!');
                callback(null, fileData);
            });
        }
    });
}

function display(callback){
    prompt.start();
    prompt.get(['username', 'email'], function (err, result) {
        idea = "Username is " + result.username + "\nEmail is " + result.email;
        callback(null, idea);
    });

}
try {
    async.series([display, writeFile, readFile], function (error, results) {
    //  console.log(results);
       console.log('Reading File!');
        results.forEach(function(value, key){
           //console.log(results[key]);
            console.log(value);
        });
    });
} catch (err){
    console.log('Error');
   // console.log(err.message);
}