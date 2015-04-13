'use strict';

var mongoose = require('mongoose'),
	Account = require('../models/account'),
	passport = require('passport'),
	LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(Account.authenticate())); 
passport.serializeUser(Account.serializeUser());
passport.deserializeUser(Account.deserializeUser());


