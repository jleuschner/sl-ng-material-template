var mainApp = angular.module('mainApp', ['ui.router', 'ngMaterial']);

mainApp.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
		.primaryPalette('teal');
		//.dark();
});

mainApp.controller('mainCtrl', ['$scope', '$mdSidenav', '$mdMedia', function ($scope, $mdSidenav, $mdMedia) {
	$scope.toggleSidenav = function (menuId) {
		$mdSidenav(menuId).toggle();
	}

	$scope.items = [];
	for (i = 1; i <= 30; i++) $scope.items.push("Zeile" + i);

} ]);

mainApp.config(function ($stateProvider, $urlRouterProvider) {
	$urlRouterProvider.otherwise("/home");

	$stateProvider
		.state('page1', {
			url: "/page1",
			templateUrl: "views/page1.html",
			controller: function ($scope) {
    		$scope.items = [];
    		for (i = 1; i <= 30;i++) $scope.items.push("Zeile x"+i);
			}
		})
		.state('page2', {
			url: "/page2",
			templateUrl: "views/page2.html"
		})
		.state('page3', {
			url: "/page3",
			templateUrl: "views/page3.html"
		})
});

