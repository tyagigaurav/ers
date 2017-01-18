ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.allotCoins', {
            url: '/allot-coins',
            templateUrl: 'app/components/allotCoins/allotCoins.html',
            controller: 'allotCoinsCtrl'

        });
});