'use strict';

var mongoose = require('mongoose'),
	User = mongoose.model('User'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

console.log("passport config!");

passport.serializeUser(function(user, done) {
  done(null, user);
});

passport.deserializeUser(function(id, done) {
	done(null, user);
}); 

passport.use(new LocalStrategy(
	function(username, password, done) {
		console.log("Yesssszz");

		User.findOne({
			'username': username 
		}, function(err, user) {
			console.log("Hej!");
			if (err) {
				return done(err); 
			}

			if (!user) {
				return done(null, false, {
					message: 'Incorrect username.' 
				});
			}

			if (!user.password !== password) {
				return done(null, false, {
					message: 'Incorrect password.' 
				});
			}
			return done(null, user);
		});
	}
));
