ersApp.config(function($stateProvider) {
    $stateProvider
        .state('dashboard.tasks', {
            url: '/tasks',
            templateUrl: 'app/shared/view/tasks.html',
            controller: 'tasksCtrl'

        });
});