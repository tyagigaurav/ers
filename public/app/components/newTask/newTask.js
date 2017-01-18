ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.newTask', {
            url: '/new-task',
            templateUrl: 'app/components/newTask/newTask.html',
            controller: 'newTaskCtrl'

        });
});