(function (window) {
	'use strict';
	
	var angular = window.angular,
		settings = window.settings,
		app = angular.module('karmapp');
	
	function config($stateProvider, $urlRouterProvider, $facebookProvider) {
		
		$facebookProvider.setAppId(settings.Facebook.appId);
		$facebookProvider.setPermissions("email,user_likes,public_profile,publish_actions");
		
		$stateProvider
		
			.state('app', {
				url: '/app',
				abstract: true,
				controller: 'AppCtrl',
				templateUrl: 'app/main/partials/app.html'
			})
		
			.state('app.home', {
				url: '/home',
				templateUrl: 'app/main/partials/home.html'
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
				templateUrl: 'app/user/partials/dashboard.html',
				data: {
					auth: true
				}
			})
			.state('app.user.settings', {
				url: '/settings',
				controller: 'UserSettingsCtrl',
				templateUrl: 'app/user/partials/settings.html',
				data: {
					auth: true
				}
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
			.state('app.issue.add', {
				url: '/add',
				controller: 'IssueAddCtrl',
				templateUrl: 'app/issue/partials/add.html',
				data: {
					auth: true
				}
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
		
		$urlRouterProvider.otherwise('/app/home');
		
	}
	
	config.$inject = [
		'$stateProvider',
		'$urlRouterProvider',
		'$facebookProvider'
	];
	
	app.config(config);
	
}(window));