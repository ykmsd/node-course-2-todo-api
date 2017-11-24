const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').findOneAndUpdate({
  //   _id: new ObjectID('5a1818adda128e0893f7fd18')
  // }, {
  //   $set: {
  //     completed: true,
  //   }
  // }, {
  //   returnOriginal: false,
  // }).then((result) => {
  //   console.log(result);
  // })
  db.collection('Users').findOneAndUpdate({
    _id: new ObjectID('5a16f028483b8052f12e9dce')
  }, {
    $set: {
      name: 'Yuka'
    },
    $inc: {
      age: 1
    }
  }, {
    returnOriginal: false,
  }).then((result) => {
    console.log(result);
  })
 //db.close();
});