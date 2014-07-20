var app = angular.module('app', ['ngResource', 'ngAnimate', 'ngSanitize', 'better_resource', 'ngRoute']).config(
	['$routeProvider', function($routeProvider){
		$routeProvider
			.when('/home', {templateUrl: 'web/html/views/home.html'})
			.when('/exercises', {templateUrl: 'web/html/views/exercise_list.html', controller: 'exercise_list', reloadOnSearch:false})
			.when('/exercises/:muscle_type_name', {templateUrl: 'web/html/views/exercise_list.html', controller: 'exercise_list', reloadOnSearch:false})
			.when('/exercise/new', {templateUrl: 'web/html/views/create_exercise.html', controller: 'new_exercise'})
			.when('/exercise/:id', {templateUrl: 'web/html/views/exercise.html', controller: 'exercise'})
			.when('/exercise/:id/go', {templateUrl: 'web/html/views/exercise_go.html', controller: 'exercise_go'})
			.when('/exercise/:id/log', {templateUrl: 'web/html/views/exercise_log.html', controller: 'exercise_log'})
			.when('/history', {templateUrl: 'web/html/views/history.html', controller: 'history'})
			.when('/logs/:logId', {templateUrl: 'web/html/views/log.html', controller: 'log'})
			.otherwise({redirectTo: '/home'});
	}]
);	