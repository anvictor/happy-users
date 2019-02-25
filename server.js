// google for example: node.js + express
// start server with command: nodemon
const PORT = 3333;

const express = require('express');
const server = express();

// Will json object
let scene;

// server.use(function (req, res, next) {
//  console.log('middleware function 1 called');
//  next();
// });
//
// server.use(function (req, res, next) {
//  console.log('middleware function 2 called');
//  next();
// });

server.use(function (req, res, next) {
  console.log(req.method, req.url);
  next();
});

server.use(express.static(__dirname + '/public'));

server.post('/newObject', function (req, res) {
  
  let body = '';
  req.on('data', function (chunk) {
    body += chunk;
  });
  req.on('end', function () {
    var data = JSON.parse(body);
    console.log('req ended', data);
    res.json({
      success: true,
      bodyStr: body
    });
  });
});

// google: how to read post data express
server.post('/scene', function (req, res) {
  // do some logic here to "save" the 3d model
  // scene = ...
});

server.get('/scene', function (req, res) {
  res.json({"a": "1"});
});


server.listen(PORT);
console.log('Server listening on port:', PORT);