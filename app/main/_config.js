(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular.module('karmapp', ['ui.router',
							   'ngFacebook',
							   'react',
							   'karmapp.auth',
							   'parse-angular',
							   'parse-angular.enhance']);
	
}(window));