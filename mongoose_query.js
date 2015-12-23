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
            age: Number,
            id: { type: Number, default: 0 }
        });

        var Names = mongoose.model('Names', nameSchema); //create model with schema


        process.stdin.on('data', function(data){
            let response = data.toString().trim();
            console.log('Exiting....');
            console.log('Good Bye....');

            if(response.toLowerCase() === 'exit'){
                process.exit(0);
            } else {
               let age = parseInt(response);
               console.log(response);
               Names.find({}).where('age').gt(age).exec(function (err, user) {
                   if (err) return console.error(err);
                   console.log(user);
               });
            }

        });


    });



