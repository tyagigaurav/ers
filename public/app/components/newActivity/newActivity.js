ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.newActivity', {
            url: '/assign',
            templateUrl: 'app/components/newActivity/newActivity.html',
            controller: 'newActivityCtrl'

        });
});