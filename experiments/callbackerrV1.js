/**
 * Created by jspeight on 12/30/15.
 */
'use strict';
const fs = require('fs');


/**
 * Write input to text file
 * @params {String} title - A string to print to the file
 * @params {Function} callback - Callback function to print err/data messages
 *
 **/
function run(title, callback){
    let map = [];
    map.push(title.toLowerCase());
    map.push(title.toUpperCase());
    map = map.reduce((m, r) => m + " \n"  + r); //---ARROWS array.reduce((previousValue, currentValue) => previousValue + currentValue);
    fs.writeFile('new.txt', "\n###LINE###\n" + map , {'encoding': 'utf-8', 'flag' : 'a'}, function(err){
        if(err) {
            callback( new Error('I have failed'));
            return;
        }
        callback(null, 'I am successfuly');
    });
}
/**
 * Callback function
 * @params {Object} err
 * @params {Object} - data
 **/
function callback(err, data){
    if(err){
        console.log(err);
        return;
    }
    console.log(data);
}
run('james', callback);