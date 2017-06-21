const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
    default: 'Uups'
  },
  create_date:{
    type: Date,
    default: Date.now
  }
});

const Posts = module.exports = mongoose.model('posts', postSchema);

module.exports.getPosts = (callback) => {
  Posts.find(callback);
}

module.exports.addPost = (post, callback) => {
  Posts.create(post, callback);
}
