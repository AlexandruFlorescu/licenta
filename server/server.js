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

app.get('*', function (req, res) {
  res.sendFile(path.resolve('client/index.html'));
});

const jwt = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `https://seastar.eu.auth0.com/.well-known/jwks.json`
  }),
  audience: 'https://seastar.eu.auth0.com/api/v2/',
  issuer: `https://seastar.eu.auth0.com/`,
  algorithms: ['RS256']
})

Crews = require('./models/crew.js');
mongoose.connect('mongodb://localhost/seastar');
var db = mongoose.connection;

app.get('/api/getCrews', checkJwt, function(req, resp) {
  Crews.getCrews((err,crews)=>{
    if(err){
      throw err;
      res.json(err);
    }
    console.log(crews);
    res.json(crews);
  })
})

app.post('/api/setCrew', checkJwt, function(req, resp){
  Crews.addCrew(crew, (err, crew) =>{
    if(err){
      throw err;
      res.json(err);
    }
    res.json(crew)
  })
})

var port = 3000;

app.listen(port, function(error) {
  if (error) throw error;
  console.log("Express server listening on port", port);
});
