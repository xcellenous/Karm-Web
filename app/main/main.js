(function (window) {
	'use strict';
	
	var angular = window.angular,
		settings = window.settings,
		app = angular.module('karmapp');
	
	function run(AuthService) {
		AuthService.initialize();
	}
	run.$inject = [
		'AuthService'
	];
	
	function config($stateProvider, $urlRouterProvider, $facebookProvider) {
		$facebookProvider.setAppId(settings.Facebook.appId);
		
		$stateProvider
		
			.state('app', {
				url: '/app',
				abstract: true,
				controller: 'AppCtrl',
				templateUrl: 'app/main/partials/app.html'
			})
		
			.state('app.user', {
				url: '/user',
				abstract: true,
				template: '<ui-view/>'
			})
			.state('app.user.login', {
				url: '/login',
				controller: 'UserLoginCtrl',
				templateUrl: 'app/user/partials/login.html'
			})
			.state('app.user.create', {
				url: '/create',
				controller: 'UserCreateCtrl',
				templateUrl: 'app/user/partials/create.html'
			})
			.state('app.user.dashboard', {
				url: '/dashboard',
				controller: 'UserDashboardCtrl',
				templateUrl: 'app/user/partials/dashboard.html'
			})
			.state('app.user.settings', {
				url: '/settings',
				controller: 'UserSettingsCtrl',
				templateUrl: 'app/user/partials/settings.html'
			})
			.state('app.user.viewAll', {
				url: '/viewAll',
				controller: 'UserViewAllCtrl',
				templateUrl: 'app/user/partials/viewAll.html'
			})
			.state('app.user.view', {
				url: '/view/:id',
				controller: 'UserViewCtrl',
				templateUrl: 'app/user/partials/view.html'
			})
		
			.state('app.issue', {
				url: '/issue',
				abstract: true,
				template: '<ui-view/>'
			})
			.state('app.issue.viewAll', {
				url: '/viewAll',
				controller: 'IssueViewAllCtrl',
				templateUrl: 'app/issue/partials/viewAll.html'
			})
			.state('app.issue.view', {
				url: '/view/:id',
				controller: 'IssueViewCtrl',
				templateUrl: 'app/issue/partials/viewAll.html'
			});
		
		$urlRouterProvider.otherwise('/');
	}
	config.$inject = [
		'$stateProvider',
		'$urlRouterProvider',
		'$facebookProvider'
	];
	
	app.run(run);
	app.config(config);
	
}(window));