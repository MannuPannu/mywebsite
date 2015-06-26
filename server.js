var express = require('express');
var path = require('path');
var fs = require('fs');
var mongoose = require('mongoose');
var app = express();

global.appRoot = path.resolve(__dirname);

// Set default node environment to development
process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var config = require('./backend/config/config');

mongoose.connect(config.mongo.uri);

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {

	console.log("connection open!");		
});

var server = app.listen(config.port, function() {
		var host = server.address().address;
		var port = server.address().port;

		console.log('Express server listening at http://%s:%s', host, port);
        console.log('Connecting to mongodb uri: ' + config.mongo.uri);
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

exports = module.exports = app;

