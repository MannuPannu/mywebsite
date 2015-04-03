'use strict'

var app = angular.module('manneApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
		
	$urlRouterProvider.otherwise("/blog");

	//Set up the states
	$stateProvider
		.state('blog', {
			url: "/blog",
			templateUrl: "app/views/partials/blog.html"	
		})
		.state('games', {
			url: "/games",
			templateUrl: "app/views/partials/games.html"
		});
});

