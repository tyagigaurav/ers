ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.authorizeActivity', {
            url: '/authorizeActivity',
            templateUrl: 'app/components/authorizeActivity/authorizeActivity.html',
            controller: 'authorizeActivityCtrl'

        });
});