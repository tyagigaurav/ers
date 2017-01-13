var ersApp = angular.module('myApp', ['ui.router']);

ersApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
    $locationProvider.html5Mode({
  enabled: true,
  requireBase: false
});
    $urlRouterProvider.otherwise('/login');
    
});