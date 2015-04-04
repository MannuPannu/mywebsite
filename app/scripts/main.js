require.config({
	baseUrl: 'app/scripts/',
	 paths: {
 	   	angular: '../../bower_components/angular/angular',
		angularUiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router',
	 },
	shim: {
		'angular' : {
			exports: 'angular'
		},
		'angularUiRouter' : {
			deps: ['angular']
		}
	},
	priority: ["angular"]

});

require(['angular',
		'app'], function(angular, app) {

			var $html = angular.element(document.getElementsByTagName('html')[0]);
			angular.element().ready(function() {

				// bootstrap the app manually
				angular.bootstrap(document, ['manneApp']);
				// 					
			});

		}
);
