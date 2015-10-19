var mainApp = angular.module('mainApp', ['ui.router', 'ngMaterial']);

mainApp.controller('mainCtrl', ['$scope', function ($scope) {

	$scope.msg = "Hallo!";

} ]);

mainApp.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/home");

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "views/home.html"
    })
    .state('page1', {
      url: "/page1",
      templateUrl: "views/page1.html",
      controller: function($scope) {
        $scope.items = ["A", "List", "Of", "Items"];
      }
    })
});

