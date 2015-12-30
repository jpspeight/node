/**
 * Created by jspeight on 12/29/15.
 */
    'use strict';
const mongoose = require('mongoose');
// mongoose.connect();
const db = mongoose.createConnection('mongodb://localhost:27017/local');

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("Successly connected to MongoDB!");
});

module.exports = db;