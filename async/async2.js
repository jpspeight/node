var async = require('async');
var fs = require('fs');

function add1(callback){
    var file = 'fileRea.txt';
    fs.stat(file, function(err, stats){
        if(err) {
            callback(err);
        }
        if(stats.isFile()){
            var file1 = fs.readFile(file, function (err, data){
                if(err){
                    //return err;
                }
                var fileContents = data.toString()
                console.log();
                callback(err, fileContents);
            });
        } else {
            callback(err);
        }
    });

}

function add2(callback){

    var file1 = fs.writeFile('fileWrite.txt', 'Hi James', function(err){
        if(err){
            callback(err);
        }
    });
    callback(err);

    /*setTimeout(function() {
        console.log('Task 2');
        callback();
    }, 300);*/
}

function add3(callback){
    setTimeout(function() {
        console.log('Task 3');
       callback(null, 'james');
    }, 300);
}
try {
    async.series([add1, add2, add3], function (error, results) {
        console.log("Reading the file: " + results[0]);
    });
} catch (err){
    console.log('Error');
    console.log(err.message);
}