var express = require('express');
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
var app = express();

mongoose.connect('mongodb://localhost/mydb');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
	console.log("connection open!");		
});

var port = process.env.PORT || 1337;

var server = app.listen(port, function() {
		var host = server.address().address;
		var port = server.address().port;

		console.log('Example app listening at http://%s:%s', host, port);
});

//Load all db models
var modelsPath = path.join(__dirname, 'backend/models');
fs.readdirSync(modelsPath).forEach(function (file) {

  if (/(.*)\.(js$|coffee$)/.test(file)) {
		require(modelsPath + '/' + file);
  }
});

//add some dummy data
require('./backend/config/dummydata');

//Configure passport (auth solution)
require('./backend/config/passport');

//Configure express
require('./backend/config/express')(app);

//Configure routes
require('./backend/routes')(app);

exports = module.exports = app;

