'use strict';

var passport = require("passport");
var express = require("express");
var session = require("express-session");
var path = require("path");
var LocalStrategy = require('passport-local');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

var routes = require('./routes');

module.exports = function(app) {
	
	app.use(session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: false
	}));

	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({extended: false}));

	app.use(cookieParser());

	app.use(passport.initialize());
	app.use(passport.session());

    // we are specifying the html directory as another public directory
	app.use(express.static(path.join(appRoot, 'app')));
	app.use(express.static(path.join(appRoot, '')));

	app.use('/', routes);
};
