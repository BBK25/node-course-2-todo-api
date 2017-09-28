const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '59cc9f6d16f38e2d8c2e88d1';
//
// if(!ObjectID.isValid(id)) {
//   console.log('ID not valid');
// }

// Todo.find({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });
//
// Todo.findOne({
//   _id: id
// }).then((todos) => {
//   console.log('Todos', todos);
// });

// Todo.findById(id).then((todos) => {
//   if (!todos){
//     return console.log('Id not found');
//   }
//   console.log('Todos By Id', todos);
// }).catch((e) => console.log(e));

User.findById('59cb7939fc08392158b30211').then((user) => {
  if (!user){
    return console.log('Id not found');
  }

  console.log(JSON.stringify(user, undefined, 2));
}, (e) => {
  console.log(e);
});
