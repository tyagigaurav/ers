var ersApp = angular.module('ersApp', ['ui.router', 'chart.js', 'ngAnimate', 'ngNotify']);

ersApp.config(function($httpProvider, $stateProvider, $urlRouterProvider, $locationProvider) {

    //    $locationProvider.html5Mode({
    //        enabled: true,
    //        requireBase: false
    //    });

    $urlRouterProvider.otherwise('/login');

    $httpProvider.interceptors.push(function($q) {
        return {
            'request': function(config) {

                config.headers['token'] = +(localStorage.getItem("token"));
                return config;
            }
        };
    });

});

ersApp.run(function($rootScope, $state, loginService, ngNotify) {

    $rootScope.$on('$stateChangeStart', function(event, toState, toParams, fromState, fromParams) {

        if (toState.name === "login") {
            return;
        }

        if (!loginService.isLoggedIn()) {
            event.preventDefault();
            $state.go("login");
        }
    });

});