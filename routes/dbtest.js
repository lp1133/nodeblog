
var databaseUrl = "3c13ba11-ef44-4dc9-ad14-a0723252fae5:5e2407ec-2ac0-4a78-954d-bab43301e415@23.246.199.110:10035/db"; // "username:password@example.com/mydb"
var mongojs = require("mongojs");
var db = mongojs(databaseUrl);
db.on('error', function (err) {
    console.log('database error', err);
})

db.on('ready', function () {
    console.log('database connected');
})
var blog = db.collection('blog');
console.log(blog);
blog.find(function (err, docs) {
    // docs is an array of all the documents in mycollection
    console.log(docs);
})
