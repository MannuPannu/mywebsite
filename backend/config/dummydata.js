'use strict'

var mongoose = require('mongoose');

var BlogEntry = mongoose.model('BlogEntry');

//Populate db with some dummy data

BlogEntry.find({}).remove(function() {
	
	BlogEntry.create({
		headerText: 'Added mongodb to my angular app',
		dateText: '2015-04-06',
		contentText: 'Today I added mongodb to my angular app, using mongoose. I implemented routes (api) which I then could call from an angular controller'		
	});

	BlogEntry.create({
		headerText: 'Test data',
		dateText: 'test',
		contentText: 'Some content'		
	});
});

