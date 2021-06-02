// Write Node.js application that transfer a file as an attachment on web and enables browser to prompt the user to download file using express js.

var express = require('express');
var app = express();
var PORT = 3000;

app.get('/', function(req, res){
	res.download('Hello.txt');
});

app.listen(PORT, function(err){
	if (err) console.log(err);
	console.log("Server listening on PORT", PORT);
});
