ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.user', {
            url: '/user/:userId',
            templateUrl: 'app/shared/view/activities.html',
            controller: 'userCtrl'

        });
});