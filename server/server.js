// var mongoose = require('mongoose');
//
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');
var express = require('express');
var bodyParser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');

var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  var todo = new Todo({
    text: req.body.text
  });

  todo.save().then((doc) => {
    res.send(doc);
  }, (e) => {
    res.send(400).send(e);
  });
  // console.log(req.body);
});

app.listen(3000, () => {
  console.log('Started on port 3000');
});

// var Todo = mongoose.model('Todo', {
//   text: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   },
//   completed: {
//     type: Boolean,
//     default: false
//   },
//   completedAt: {
//     type: Number,
//     default: null
//   }
// });

// var User = mongoose.model('User', {
//   email: {
//     type: String,
//     required: true,
//     minlength: 1,
//     trim: true
//   }
// });

// var newTodo = new Todo({
//   text: 'Cook dinner'
// });
//
// newTodo.save().then((doc) => {
//   console.log('Save todo', doc);
// }, (e) => {
//   console.log('Unble to save todo')
// });

// var otherTodo = new Todo({
//   text: ' Edit this video'
//   // text: 'Feed the cat',
//   // completed: true,
//   // completedAt: 123
// });

// var otherTodo = new Todo({
//   text: 'Something to do'
// });

// var otherUser = new User({
//   email: 'balogh.benjamin1991@gmail.com'
// })
//
// // otherTodo.save().then((doc) => {
// otherUser.save().then((doc) => {
//   // console.log(JSON.stringify(doc, undefined, 2));
//   console.log('User saved', doc);
// }, (e) => {
//   console.log('Unable to save', e);
// });