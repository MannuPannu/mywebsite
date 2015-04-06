'use strict'

var api = require('./controllers/api');

module.exports = function(app) {
		
	app.get('/api/blogentries', api.GetBlogEntries);
	// All undefined api routes should return a 404
    app.get('/api/*', function (req, res) {
         res.send(404);
   });
}
