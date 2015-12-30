/**
 * Created by jspeight on 12/29/15.
 */
    'use strict';
const mongoose = require('mongoose');


var nameSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number,
    id: { type: Number, default: 0 }
});

module.exports =  nameSchema;




