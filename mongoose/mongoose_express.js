/**
 * Created by jspeight on 12/23/15.
 */
const express = require('express');
const path = require('path');


var app = express(); //create app

var routes = require('./routes/index');
var users = require('./routes/users');


app.use('/users', users);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');


app.listen(3000);
console.log('Listening on 3000');
