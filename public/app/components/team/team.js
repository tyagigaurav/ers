ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.team', {
            url: '/team',
            templateUrl: 'app/components/team/team.html',
            controller: 'teamCtrl'

        })
});