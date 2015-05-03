(function (window) {
	'use strict';
	
	var angular = window.angular,
		app = angular.module('karmapp');
	
	/**
		@description Bootstraps our application by initializing the
			AuthService module to listen to state changes and check
			for correct (and incorrect) user permissions. It also
			initializes the Facebook SDK so that it can be used
			by ngFacebook.
	*/
	function run(AuthService) {
		AuthService.initialize();
		
		(function (d, s, id) {
			var js, fjs = d.getElementsByTagName(s)[0];
			if (d.getElementById(id)) {
				return;
			}
			js = d.createElement(s);
			js.id = id;
			js.src = "//connect.facebook.net/en_US/sdk.js";
			fjs.parentNode.insertBefore(js, fjs);
		}(document, 'script', 'facebook-jssdk'));
	}
	
	run.$inject = [
		'AuthService'
	];
	
	app.run(run);
	
}(window));