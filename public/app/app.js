var ersApp = angular.module('myApp', ['ui.router']);

ersApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/login');
    $locationProvider.html5Mode(false);
});