var async = require('async');
async.series([
    function(callback) {
        setTimeout(function() {
            console.log('Task 1');
            callback(null, 3);
        }, 300);
    },
    function(callback) {
        setTimeout(function() {
            console.log('Task 2');
            callback(null, 2);
        }, 1000);
    },
    function(callback) {
        setTimeout(function() {
            console.log('Task 3');
            callback(null, 1);
        }, 5000);
    }
], function(error, results) {
    console.log(results);
});