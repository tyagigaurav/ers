ersApp.config(function($stateProvider) {
    $stateProvider
        .state('dashboard.teamMember', {
            url: '/team/user/:userId',
            templateUrl: 'app/shared/view/tasks.html',
            controller: 'teamMemberCtrl'

        });
});