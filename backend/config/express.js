'use strict';

var passport = require("passport");
var express = require("express");
var session = require("express-session");
var path = require("path");
var LocalStrategy = require('passport-local');

module.exports = function(app) {
	
	app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false
	}));

	app.use(passport.initialize());
	app.use(passport.session());

    console.log("DirName" + __dirname);
    // we are specifying the html directory as another public directory
	app.use(express.static(path.join(__dirname, 'app')));
	app.use(express.static(path.join(__dirname, '')));
};
