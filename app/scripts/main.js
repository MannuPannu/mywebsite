require.config({
	baseUrl: 'app/scripts/',
	 paths: {
 	   	angular: '../../bower_components/angular/angular',
 	   	angularUiRouter: '../../bower_components/angular-ui-router/release/angular-ui-router',
        jquery: '../../bower_components/jquery/dist/jquery.min',
        bootstrapJs: '../../bower_components/bootstrap/dist/js/bootstrap.min',
        angularHighlightjs: '../../bower_components/angular-highlightjs/angular-highlightjs.min',
        highlightjs: '../../bower_components/highlightjs/highlight.pack',
		blogController: 'controllers/blogController',
		navbarController: 'controllers/navbarController'
	 },
	shim: {
		'angular' : {
			exports: 'angular'
		},
		'angularUiRouter' : {
			deps: ['angular']
		},
        bootstrapJs: {
            deps: ['jquery']
        },
        angularHighlightjs: {
            deps: ['angular', 'highlightjs']
        }
	},
	priority: ["angular"]

});

require(['angular','jquery', 'bootstrapJs', 'angularHighlightjs',
		'app'], function (angular) {

        //console.log(hljs);
		    //hljs.initHighlightingOnLoad(); //Init code syntax plugin

			angular.element(document.getElementsByTagName('html')[0]);
			angular.element().ready(function() {

				// bootstrap the app manually
				angular.bootstrap(document, ['manneApp']);
			});
		}
);
