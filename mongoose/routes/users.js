/**
 * Created by jspeight on 12/23/15.
 */
var express = require('express');
var router = express.Router();


const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/local'); //create connection
const db = mongoose.connection;


//SCHEMA BUILD
var nameSchema = mongoose.Schema({ //create schema
    firstName: String,
    lastName: String,
    age: Number,
    id: { type: Number, default: 0 }
});
//MODEL BUILD
var Names = mongoose.model('Names', nameSchema); //create model with schema
router.get('/:age', function(req, res){

    if(req.params.age == 0){
        res.render('users');
    } else {
        Names.find({age : req.params.age}, function(err, users){
            res.send(users);
        });
    }

 });

module.exports = router;