ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.tasks', {
            url: '/tasks',
            templateUrl: 'app/shared/view/tasks.html',
            controller: 'tasksCtrl'

        });
});