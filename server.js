var express = require('express');
var path = require('path');

var app = express();

// we are specifying the html directory as another public directory
app.use(express.static(path.join(__dirname, 'app')));
app.use(express.static(path.join(__dirname, '')));

var port = process.env.PORT || 1337;

var server = app.listen(port, function() {
		var host = server.address().address;
		var port = server.address().port;

		console.log('Example app listening at http://%s:%s', host, port);
});

