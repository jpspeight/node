/**
 * Created by jspeight on 12/30/15.
 */
/**
 *
 *
 */
'use strict';
const fs = require('fs');
const events = require('events');
const EventEmitter = events.EventEmitter;
const util = require('util');

var User = function() {
    EventEmitter.call(this);

    this.tokens = {
        'id' : 55,
        'date' : new Date()
    };

    this.type = 'web';

};

util(User, EventEmitter);

User.prototype.runType = function(file){
  fs.writeFile('items', 'text to write', {'encoding': 'utf-8', 'flag' : 'a'}, function(err){
      if (err) {
          this.emit('error', new Error('This is a error'));
          return this;
      }
  });
    return this;
};

module.exports = new User;



