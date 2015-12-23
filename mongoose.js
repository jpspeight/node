	'use strict';
	const mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost:27017/local');
    const db = mongoose.connection;
    var n;

    const readline = require('readline'),
    rl = readline.createInterface(process.stdin, process.stdout);

    db.on('error', console.error.bind(console, 'connection error:'));

    db.once('open', function () {
        console.log("Successly connected to MongoDB!");
        rl.setPrompt('Saving Entries> ');
        rl.prompt();


        let nameSchema = mongoose.Schema({ //create schema
            firstName: String,
            lastName: String,
            age: Number,
            id: { type: Number, default: 0 }
        });

        var Names = mongoose.model('Names', nameSchema); //create model with schema

        let person = new Names({ //create instance
            firstName : 'annie',
            lastName : 'dallas',
            age : 55,
            id: 0
        });

        rl.on('line', function(line) {
            //console.log(line.trim());
            rl.prompt();


            //james.id++;
            person.pre('save', function(next, done){
                person.firstName = line.toString().trim();
               /* this.id++;
                console.log(this.id);*/
                next();
            });

            person.save(function(err){
                if(err) return console.error(err);
                console.log('User saved successfully!')
            });

        });

        rl.on('close', function(){
            process.exit(0);
        });

    });



