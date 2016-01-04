/**
 *
 * Module creates and returns a Data Object that is extends the EventEmitter
 * Opens and reads a text file.
 * The method openRun() uses Arrows to bridget the this scope to the callback to bind
 * the EventEmitter to
 */
'use strict';
const fs = require('fs');
const events = require('events');
const EventEmitter = events.EventEmitter; //EventEmitter Class
const emitter = new events.EventEmitter(); //Instantiate a new EventEmitter Object
const util = require('util');

var Data = function() {
    EventEmitter.call(this);
    this.name = {
       'first': 'James',
       'last' : 'Speight'
   }
};

util.inherits(Data, EventEmitter);
/**
 * openRun function - Test to the method chain
 **/
Data.prototype.openRun = function(){
    //console.log(`${this.name.first}, ${this.name.last}`);
    return this; //return this to chain functions
};
/**
 * openFile function - Opens file and appends data to it
 * @params {String} file
 * @return this - make chainable
 **/
Data.prototype.openFile = function(file) {
    fs.readFile(file, (err, data) => {
        if (err) {
            this.emit('error', new Error('This is a error'));
            return this;
        }
         this.emit('data', data.toString());
        return this;

    });
    return this;
};
module.exports = new Data;



