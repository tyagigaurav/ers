ersApp.config(function($stateProvider) {
    $stateProvider
        .state('dashboard.team', {
            url: '/team',
            templateUrl: 'app/components/team/team.html',
            controller: 'teamCtrl'

        });
});