

//JWT
// var jwt = require('jsonwebtoken');
// var uuid = require('uuid');
// var expressJWT = require('express-jwt');
// var secretKey = 'aracet' //uuid.v4();
// app.use(expressJWT({secret:secretKey})
//    .unless({path:['/','/api/users','/api/register','/api/signIn', '/api/posts']}));

//SET UP ROUTES
// app.get('/api/users', (req, res) => {

  console.log(token);
  //
  // var options = { method: 'GET',
  // url: 'https://seastar.eu.auth0.com/api/v2/users',
  // headers: { authorization:"Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImtpZCI6Ik9EVXlRekF5TkVGRU9UUXlOVFkzT1RsRVJVTTROemhFTnpNMU5EQkNNME0zT1VWRU5qTkdOdyJ9.eyJpc3MiOiJodHRwczovL3NlYXN0YXIuZXUuYXV0aDAuY29tLyIsInN1YiI6Im55bHk4emhuc2VXMkdpV3lhRU5sNXFhc0FseHpFcE56QGNsaWVudHMiLCJhdWQiOiJodHRwczovL3NlYXN0YXIuZXUuYXV0aDAuY29tL2FwaS92Mi8iLCJleHAiOjE1MDAxMzAxMzQsImlhdCI6MTUwMDA0MzczNCwic2NvcGUiOiJyZWFkOnVzZXJzIHVwZGF0ZTp1c2VycyJ9.G4VezylCJ3iOUtnnl7zvfVG92Ys8ZLDpq58_-S8evB_K8-ExEhApo2q4XhKTXADca_WfEzubO4Xoi5AfKioC5Nz-ziqHXqS-jJxRrF4YpGULm6usTOmPJdUswuBrrD3JXHVvxd7sEPOM3wFqV9HD-p1OKUghiRLXmbjAaiQB-48evq0cP4WNxIDDm4CLhnSwH6C4h9URhuaF1W08kLlV3tcQRHjBCE4D1wcn2FTVHzJ7BIMHlMfGJMSAT1HbDQvOEDBbZ5NL6GRiGCy8hMkEKRGnxrslGQ_ZhCdcU9WOw5TQw6vFQcvte2Worsc2OmRYFpbtQRsjpFTAZnb_8BIOsA" } };
  //
  // request(options, function (error, response, body) {
  //   if (error) throw new Error(error);
  //
  //   console.log(body);
  // });

  // Users.getUsers((err, users) => {
  //     if(err){
  //       throw err;
  //     }
  //     res.json(users);
  //   })
});
//
// app.post('/api/register', (req, res) => {
//   var user = req.body;
//   Users.addUser(user, (err, user) => {
//     if(err) {
//       throw err;
//       res.json(err);
//     }
//     res.json(user);
//   });
// });
//
// app.post('/api/login', (req, res) => {
//   var user = req.body;
//   var response = {};
//
//   Users.findOne({
//     username: req.body.username
//   }, function(err, user){
//     if(err) throw err;
//
//     if(!user) {
//       throw new Error('user not found');
//       res.json({success: false, message:'User not found'});
//     }
//     else if(user){
//         if(user.password != req.body.password){
//             throw new Error('wrong Password');
//             res.json({success:false, message: 'Wrong password'});
//           } else {
//             var token = jwt.sign(user, secretKey, { expiresIn: '4h' });
//             res.json({success: true, message:'Welcome!', token:token});
//           }
//     }
//   });
// });
//
// app.post('/api/sendPost', (req, res) => {
//   //perhaps decode user here?
//   var post = req.body;
//   Posts.addPost(post, (err, post) => {
//     if(err){
//       throw err;
//       res.json(err);
//     }
//     res.json(post);
//   });
//   // Users.findById(req.body.author, (err, user)=>{
//   //   if(err){
//   //     throw err;
//   //     res.json(err);
//   //   }
//   //   res.json(user);ol
//   // });
// });
//
// app.get('/api/posts', (req, res) => {
//   Posts.getPosts((err, posts) => {
//     if(err) {
//       throw err;
//     }
//     res.json(posts);
//   })
// })
//END ROUTES
