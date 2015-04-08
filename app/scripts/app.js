'use strict'

define(['angular', 'angularUiRouter', 'blogController', 'navbarController'], function(angular, angularUiRouter, blogController, navbarController) {

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
				templateUrl: "app/views/partials/blog.html",
				controller: blogController
			})
			.state('main.games', {
				url: "/games",
				templateUrl: "app/views/partials/games.html"
			})
			.state('main.about', {
				url: "/about",
				templateUrl: "app/views/partials/about.html"
			});
	});

	app.controller('navbarController', navbarController);

	return app;
});
