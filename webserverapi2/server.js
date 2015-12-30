/**
 * Created by jspeight on 12/29/15.
 */
    'use strict';
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', require('./routes'));

app.use(function(req, res) {
    res.status(404).send('404: Page not Found');
});

app.set('port', process.env.PORT || 9561);
const server = app.listen(app.get('port'), '192.168.1.87', function(){
    console.log('Listening on port 192.168.1.87:9561');
});