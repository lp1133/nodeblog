var express = require('express');
var router = express.Router();


var databaseUrl = "mongodb://3c13ba11-ef44-4dc9-ad14-a0723252fae5:5e2407ec-2ac0-4a78-954d-bab43301e415@23.246.199.110:10035/db"; // "username:password@example.com/mydb"
var mongojs = require("mongojs");

router.get('/', function(req, res, next) {
  var db = mongojs(databaseUrl);
  var blog = db.collection('blog');
  res.send('ok!');
  res.send(blog);
  
  db.on('error', function (err) {
      res.send('database error', err);
      console.log('database error', err);
  })

  db.on('ready', function () {
      res.send('database connected');
      console.log('database connected');
  })
});

module.exports = router;
