'use strict'

var app = angular.module('manneApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
		
	$urlRouterProvider.otherwise("/main/blog");

	//Set up the states
	$stateProvider
		.state('main', {
			url: '/main',
			templateUrl: "app/views/main.html"
		})
		.state('main.blog', {
			url: "/blog",
			templateUrl: "app/views/partials/blog.html"	
		})
		.state('main.games', {
			url: "/games",
			templateUrl: "app/views/partials/games.html"
		});
});

