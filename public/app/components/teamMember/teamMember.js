ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.teamMember', {
            url: '/team/user/:userId',
            templateUrl: 'app/shared/view/tasks.html',
            controller: 'teamMemberCtrl'

        });
});