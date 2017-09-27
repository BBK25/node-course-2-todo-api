const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('59cb5830e2579a11282d22f1')
  // }, {
  //   $set: {
  //     completed: true
  //   }
  // }, {
  //   returnOriginal: false
  // }). then((result) => {
  //   console.log(result);
  // });

  db.collection('Users').findOneAndUpdate({
    name: 'Jen'
  }, {
    $set: {
      name: 'Jenny'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false
  }). then((result) => {
    console.log(result);
  });
});
