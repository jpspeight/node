	'use strict';
	const mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost:27017/local');
    const db = mongoose.connection;

    db.on('error', console.error.bind(console, 'connection error:'));



    db.once('open', function () {
        console.log("Successly connected to MongoDB!");

        let nameSchema = mongoose.Schema({ //create schema
            firstName: String,
            lastName: String,
            age: Number
        });

        let Names = mongoose.model('Names', nameSchema); //create model with schema

        let james = new Names({ //create instance
            firstName : 'James',
            lastName : 'Speight',
            age : 59
        });

        james.save(function(err){
            if(err) return console.error(err);
        });
    });

	/*Name.find(function (err, james) {
  		if (err) return console.error(err);
  		console.log(james)*/
