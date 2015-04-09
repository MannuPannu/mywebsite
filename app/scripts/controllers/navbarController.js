'use strict';

define([], function () {
    var navbarController = function ($scope, $location) {

        $scope.isActive = function (route) {
            return route === $location.path();
        };
    };

    return navbarController;
});
