'use strict';

define([], function () {
    var navbarController = function ($scope, $location) {

        $scope.isActive = function (route) {
            console.log($location.path());
            return route === $location.path();
        };
    };

    return navbarController;
});
