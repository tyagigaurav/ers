ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.teamMember', {
            url: '/team/user/:userId',
            templateUrl: 'app/shared/view/activities.html',
            params: {
    			obj: null
  			},
            controller: 'teamMemberCtrl'

        });
});