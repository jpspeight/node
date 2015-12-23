
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/local';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
  //assert.equal(null, err);
  if (err) {
    console.log('Unable to connect to the mongoDB server. Error:', err);
  } else {
    //HURRAY!! We are connected. :)
    console.log('Connection established to', url);

    // do some work here with the database.
	// Get the documents collection
    var collection = db.collection('testCollections');
	//toArray returns the elements in an array format
	collection.find().toArray(function (err, result) {
      if (err) {
        console.log(err);
      } else if (result.length) {
        console.log('Found:', result);
      } else {
        console.log('No document(s) found with defined "find" criteria!');
      }
    //Close connection
    db.close();
    });
  }
});