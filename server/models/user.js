const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    username: {
      type: String,
      required: true,
      index: {unique: true}
    },
    email: {
      type: String
    },
    password: {
      type: String,
      required: true
    },
    image:{
      type: String,
      default: './../assets/matthew.png',
    },
    crew:{
      type: String,
      default: 'Solo Wave Rider',
    },
    role:{
      type: String,
      default: 'One Man Army',
    },
    favTool:{
      type: String,
      default: 'No Tool',
    },
    age:{
      type: Number,
      default: 0,
    },
    reputation:{
      type: Number,
      default: 100,
      min: 0,
      max: 9999,
    },
    honor:{
      type: Number,
      default: 100,
      min: 0,
      max: 9999,
    },
    create_date:{
      type: Date,
      default: Date.now
    }
});

const Users = module.exports = mongoose.model('users', userSchema);

module.exports.getUsers = (callback) => {
  Users.find(callback);
}

module.exports.findUser = (user,callback) => {
  Users.find(user, callback);
}

module.exports.addUser = (user, callback) => {
  Users.create(user, callback);
}
