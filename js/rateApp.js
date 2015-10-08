"use strict";
(function(){
	var app = angular.module('ratingApp', ['ngRoute']);
	app.config(function($routeProvider){
		$routeProvider
		.when('/', {
			templateUrl: 'views/list.html'
		})
		.when('/candidate/:candiateIndex', {
			templateUrl: 'views/candiate.html',
			controller: 'candidatecontroller'
		})
		// .when('', )
		.otherwise({ redirectTo: '/'});
	});

}());