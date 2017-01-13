ersApp.config(function($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/components/dashboard.user/dashboard.user.html'
        });
});