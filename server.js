var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var mongojs = require('mongojs');
var port = 8000 | process.env.PORT;
var db = mongojs('candidateList',['candidateList']);

app.use(express.static(__dirname + '/public'));
require('./routes/routes.js')(app, express, db, bodyParser, mongojs);

app.listen(port, function(){
	console.log("Server is listening at the port: " + port + ". Press ctrl+C to exit.");
});