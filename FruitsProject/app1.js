
/*-------------------- CODE USING MONGODB NODE JS DRIVERS----------------------*/

// const MongoClient = require('mongodb').MongoClient;
// const assert = require('assert');
//
// // Connection URL
// const url = 'mongodb://localhost:27017';
//
// // Database Name
// const dbName = 'FruitsDB';
//
// // Create a new MongoClient
// const client = new MongoClient(url, {useNewUrlParser: true});
//
// // Use connect method to connect to the Server
// client.connect(function(err) {
//   assert.equal(null, err);
//   console.log("Connected successfully to server");
//
//   const db = client.db(dbName);
//
//   // insertDocuments(db, function() {
//   //   findDocuments(db, function() {
//   //     client.close();
//   //   });
//   // })
//
//   findDocuments(db, function() {
//     client.close();
//   });
// });
//
//
// // insert documents
// const insertDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Insert some documents
//   collection.insertMany([
//     {
//       name: 'Apple',
//       score: 8,
//       review: 'great fruit!'
//     },
//     {
//       name: 'Orange',
//       score: 6,
//       review: 'kinda sour'
//     },
//     {
//       name: 'Banana',
//       score: 9,
//       review: 'great stuff'
//     }
//   ], function(err, result) {
//     assert.equal(err, null); // validation - no errors
//     assert.equal(3, result.result.n); // ensure 3 documents are entered
//     assert.equal(3, result.ops.length);
//     console.log("Inserted 3 documents into the collection");
//     callback(result);
//   });
// }
//
//
// // find documents
// const findDocuments = function(db, callback) {
//   // Get the documents collection
//   const collection = db.collection('fruits');
//   // Find some documents
//   collection.find({}).toArray(function(err, fruits) {
//     assert.equal(err, null);
//     console.log("Found the following records");
//     console.log(fruits)
//     callback(fruits);
//   });
// }
