	'use strict';
	const mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost:27017/local');
    const db = mongoose.connection;


    const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);




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

        let james = new Names({ //create instance
            firstName : 'annie',
            lastName : 'biga',
            age : 55
        });

        james.pre('save', function(next){
            let currentDate = new Date();
            this.created_at = currentDate;
            next();
        });

        james.save(function(err){
            if(err) return console.error(err);
            console.log('User saved successfully!')
        });


        process.stdin.on('data', function(data){
            let response = data.toString().trim();
            console.log(response);

            //FIND ALL
           /* Names.find(function (err, james) {
                if (err) return console.error(err);
                console.log(james);
            });*/
           /* Names.find({firstName:response }, function (err, user) {
                if (err) return console.error(err);
                console.log(user);
            });*/

          Names.find(1, function (err, user) {
                if (err) return console.error(err);
                console.log(user);
            });

        });


    });



