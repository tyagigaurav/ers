ersApp.config(function($stateProvider) {
    $stateProvider
        .state('dashboard.user', {
            url: '/user/:userId',
            templateUrl: 'app/shared/view/tasks.html',
            controller: 'userCtrl'

        });
});