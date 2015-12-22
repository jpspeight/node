	var mongoose = require('mongoose');
	mongoose.connect('mongodb://localhost:27017/local');

	var db = mongoose.connection;
	db.on('error', console.error.bind(console, 'connection error:'));
	db.once('open', function (callback) {
 		console.log("Successly connected to MongoDB!");
	});


	var nameSchema = mongoose.Schema({
		firstName: String,
		lastName: String,
		age: Number
	})
	
	var Name = mongoose.model('Name', nameSchema);
	
	var james = new Name({firstName : 'Canny', lastName : 'Speaky', age : 59});
	
	james.save(function(err, james){
		if(err) return console.error(err);
	});
	
	Name.find(function (err, james) {
  		if (err) return console.error(err);
  		console.log(james)
})