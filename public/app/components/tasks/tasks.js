ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.tasks', {
            url: '/tasks',
            templateUrl: 'app/components/tasks/tasks.html',
            controller: 'tasksCtrl'

        });
});