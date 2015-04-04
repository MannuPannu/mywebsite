'use strict'

var welcomeText = "Welcome to my new site! My name is Magnus!";
angular.module('manneApp').controller("MainCtrl", function($scope){
		$scope.text = welcomeText;
});
