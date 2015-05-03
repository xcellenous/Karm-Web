(function (window) {
	'use strict';
	
	var angular = window.angular,
		app = angular.module('karmapp');

	function AppCtrl($scope, $state, AuthService) {
		
		$scope.app = {};
		
		/**
			@memberof AppCtrl
			@description Is a user logged in to our application
		*/
		$scope.app.isLoggedIn = function () {
			return AuthService.isLoggedIn();
		};
		
		/**
			@memberof AppCtrl
			@description Log a user out
		*/
		$scope.app.logout = function () {
			AuthService.logout();
		};
		
	}
	
	AppCtrl.$inject = [
		'$scope',
		'$state',
		'AuthService'
	];
	
	app.controller('AppCtrl', AppCtrl);
	
}(window));