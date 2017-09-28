const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove ({}).then((result) => {
//   console.log(result);
// });

// Todo.findOneAndRemove({_id: '59ccd4e2d201ec00b14e3ec0'}).then((todo) => {
//
// });

Todo.findByIdAndRemove('59ccd4e2d201ec00b14e3ec0').then((todo) => {
  console.log(todo);
});
