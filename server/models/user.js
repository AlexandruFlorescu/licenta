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
    create_date:{
      type: Date,
      default: Date.now
    }
});

const Users = module.exports = mongoose.model('users', userSchema);

module.exports.getUsers = (callback) => {
  Users.find(callback);
}

module.exports.addUser = (user, callback) => {
  Users.create(user, callback);
}
