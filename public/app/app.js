var ersApp = angular.module('ersApp', ['ui.router', 'chart.js', 'ngAnimate']);

ersApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {

    // $locationProvider.html5Mode({
    //     enabled: true,
    //     requireBase: false
    // });

    $urlRouterProvider.otherwise('/login');

});

ersApp.run(function ($rootScope, $state, loginService) {

    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        if(toState.name === "login"){
            return;
        }

       //  if(loginService.isLoggedIn() && toState.name === "login"){
       //     $state.go("dashboard");
       // }

       if (!loginService.isLoggedIn()) {
        console.log('DENY');
        event.preventDefault();
        $state.go("login");

    }

});


    
});