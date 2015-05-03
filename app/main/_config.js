(function (window) {
	'use strict';
	
	var angular = window.angular;
	
	angular.module('karmapp', ['ui.router', 
							   'ngFacebook',
							   'react',
							   'parse-angular', 
							   'parse-angular.enhance']);
	
}(window));