ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root', {
            url: '/ers',
            templateUrl: 'app/components/layout/layout.html',
            controller: 'layoutCtrl'
            
        });
});