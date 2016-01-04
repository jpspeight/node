/**
 * Created by jspeight on 1/2/16.
 */
'use strict';
const fs = require('fs');
let writeStream = fs.createWriteStream('run.txt');
writeStream.write('test');
writeStream.end();

const User = function(name, weight, height){
    var _id = 4;

    this.properies = [
        this.name = name,
        this.weight = weight,
        this.height = height
    ];

    this.sayName = function(){
        console.log(_id);
    }
};

User.prototype.sayStats = function(){
    let property= [];
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            this.properies.forEach(function(p){
                property.push(p);
                console.log(p);
            });
            reject(property);
        }, 2000);

    });
};

User.prototype.endStats = function(data){
    console.log('data is ' + data.join(', +'));
};

User.prototype.runStats = function(data){
    console.log(data);
};

var test = new User('james',138,6.10);


test.sayName();

test.sayStats().then(test.endStats).catch(
    function(reason){
        console.log(`Error! Reason: ${reason}`);
    });