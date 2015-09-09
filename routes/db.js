var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
var databaseUrl = "mongodb://be879069-b273-4656-b5fb-3daa5c508044:f268582e-0a52-42a8-9b97-66889a9cb662@10.0.116.49:10001/db"; // "username:password@example.com/mydb"
var collections = ["blog"]
var mongojs = require("mongojs");
var db = mongojs(databaseUrl, collections);
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
