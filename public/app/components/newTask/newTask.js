ersApp.config(function($stateProvider) {
    $stateProvider
        .state('root.newTask', {
            url: '/newTask',
            templateUrl: 'app/components/newTask/newTask.html',
            controller: 'newTaskCtrl'

        });
});