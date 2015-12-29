/**
 * Created by jspeight on 12/28/15.
 */
var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');


var app = express();


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Auth Middleware - This will check if the token is valid
// Only the requests that start with /api/v1/* will be checked for the token.
// Any URL's that do not follow the below pattern should be avoided unless you
// are sure that authentication is not needed
app.all('/api/v1/*', [require('./middleware/validateRequest')]);

app.use('/', require('./routes'));

// If no route is matched by now, it must be a 404
/*app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});*/



app.set('port', process.env.PORT || 9561);

var server = app.listen(app.get('port'), '192.168.1.87', function(){
   console.log('Listening on port 192.168.1.87:9561');
});