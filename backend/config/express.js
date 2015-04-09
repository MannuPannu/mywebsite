'use strict';

var passport = require("passport");
var express = require("express");
var session = require("express-session");
var path = require("path");

module.exports = function(app) {
	
	app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false
	}));

	app.use(passport.initialize());

	app.use(passport.session());
	// app.use('/', routes);
};
