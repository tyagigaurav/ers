ersApp.config(function($stateProvider) {
    $stateProvider
        .state('login', {
            url: '/login',
            templateUrl: 'app/components/login/login.html',
            controller : 'loginCtrl',
            onEnter: function($location, loginService){
            if(loginService.isLoggedIn()){
                $location.path('/dashboard');
            }
    }

        });
});