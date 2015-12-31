/**
 * Created by jspeight on 12/30/15.
 */
/**
 * Created by jspeight on 12/30/15.
 */
'use strict';
const fs = require('fs');
var file = 'error.txt';


/*IMPORT data object*/
var data = require('./data');

data.openRun().openFile(file).on('error', function(err){
    console.log('This is a error');
    console.log(err);
}).on('data', function(data){
    console.log('Success');
    console.log(data);
});






