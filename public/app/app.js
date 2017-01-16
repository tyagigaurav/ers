var ersApp = angular.module('ersApp', ['ui.router']);

ersApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
//     $locationProvider.html5Mode
//     ({
//   enabled: false,
//   requireBase: false
// });
    $urlRouterProvider.otherwise('/login');
    
});