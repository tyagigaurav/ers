var ersApp = angular.module('ersApp', ['ui.router']);

ersApp.config(function($stateProvider, $urlRouterProvider, $locationProvider) {
//     $locationProvider.html5Mode
//     ({
//   enabled: false,
//   requireBase: false
// });
    $urlRouterProvider.otherwise('/login');

  });

    ersApp.run(function ($rootScope, $state, loginService) {
        
    $rootScope.$on('$stateChangeStart', function (event, toState, toParams, fromState, fromParams) {

        var isLogin = toState.name === "login";
        if(isLogin){
           return;
        }
        
        if (!loginService.isLoggedIn()) {
            console.log('DENY');
            event.preventDefault();
            $state.go("login");
             
        }

    });


    
    });