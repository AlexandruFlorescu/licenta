var express = require('express');
var path = require('path');
var config = require('../webpack.config.js');
var webpack = require('webpack');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');

var app = express();
var compiler = webpack(config);

app.use(bodyParser.json());
app.use(webpackDevMiddleware(compiler, {noInfo: true, publicPath: config.output.publicPath}));
app.use(webpackHotMiddleware(compiler));

app.use(express.static('./dist'));

app.get('/', function (req, res) {
    res.sendFile(path.resolve('client/index.html'));
    // res.send('please use /api')
});

Users = require('./models/user.js');
mongoose.connect('mongodb://localhost/seastar');
var db = mongoose.connection;

app.get('/api/users', (req, res) => {
    // res.send('ajung');
    Users.getUsers((err, users) => {
      if(err){
        throw err;
      }
      res.json(users);
    })
});

app.post('/api/user', (req, res) => {
  var user = req.body;
  Users.addUser(user, (err, user) => {
    if(err) {
      throw err;
      res.json(err);
    }
    res.json(user);
  });
});

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
