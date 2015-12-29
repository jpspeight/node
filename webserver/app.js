'use strict';
const express = require('express');
const cors = require('cors');
const app = express();


let skierTerms = [
    {
      term: 'Rip',
        define: 'Moving High'
    },
    {
        term: 'Huck',
        define: 'Moving Low'
    },
    {
        term: 'Chowder',
        define: 'Powder to the people'
    }
];



app.use(function(req, res, next){
    console.log(`${req.method} request for ${req.url}`);
    req.requestTime = Date.now();
    next();
});

app.use(express.static('./public'));

//app.use(cors());


app.get("/dictionary-api", function(req, res){
    res.json(skierTerms);
});

app.get("/dictionary-api2", function(req, res){
    let responseText = 'Hello World!';
    responseText += 'Requested at: ' + req.requestTime + '';
    res.send(responseText);
});

app.get('/who/:name?', function(req, res){
    let name = req.params.name;
    res.send(name + ' was here.');
});

app.listen(3000);
console.log('Express app running on port 3000');
module.exports = app;