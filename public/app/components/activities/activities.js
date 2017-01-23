ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.activities', {
            url: '/activities',
            templateUrl: 'app/components/activities/activities.html',
            controller: 'activitiesCtrl'

        });
});