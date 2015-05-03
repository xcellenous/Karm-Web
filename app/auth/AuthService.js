(function (window) {
	'use strict';
	
	var angular = window.angular,
		app = angular.module('karmapp.auth');
	
	function AuthService($rootScope, $q, $facebook) {
		var isInitialized = false,
			isLoggedIn = false,
			self = this;
		
		/**
			@memberof AuthService
			@description Bootstraps our Authentication service
			@private
		*/
		function bootstrapAuth() {
			function stateChangeHandler(event, toState, toParams) {
				if (toState.data &&
						toState.data.auth === true &&
						isLoggedIn === false) {
					self.login().then(
						null,
						function (response) {
							event.preventDefault();
						}
					);
				}
			}
			$rootScope.$on('$stateChangeStart', stateChangeHandler);
		}
		
		/**
			@memberof AuthService
			@description If our AuthService hasn't been initialized
				yet, initialized it!
		*/
		this.initialize = function () {
			if (isInitialized === false) {
				bootstrapAuth();
			}
		};
		
		/**
			@memberof AuthService
			@description Log a user in using the Facebook SDK
		*/
		this.login = function () {
			var defer = $q.defer();
			
			$facebook.login().then(
				function (response) {
					if (response.status === "connected") {
						defer.resolve(response);
						isLoggedIn = true;
					} else {
						defer.reject(response);
					}
				},
				function (response) {
					defer.reject(response);
				}
			);
			
			return defer.promise;
		};
		
		/**
			@memberof AuthService
			@description Log a user out
		*/
		this.logout = function () {
			var defer = $q.defer();
			
			$facebook.logout().then(
				function (response) {
					defer.resolve(response);
					isLoggedIn = false;
				},
				function (response) {
					window.alert("Could not log you out :" + response.status);
					defer.reject(response);
				}
			);
			
			return defer.promise;
		};
		
		/**
			@memberof AuthService
			@description Checks if a user is logged in
		*/
		this.isLoggedIn = function () {
			return isLoggedIn;
		};
		
	}
	
	AuthService.$inject = [
		'$rootScope',
		'$q',
		'$facebook'
	];
	
	app.service('AuthService', AuthService);
	
}(window));