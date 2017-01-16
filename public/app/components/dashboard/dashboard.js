ersApp.config(function($stateProvider) {
    $stateProvider
        .state('dashboard', {
            url: '/dashboard',
            templateUrl: 'app/components/dashboard/dashboard.html',
            controller: 'dashboardCtrl'
            
        });
});