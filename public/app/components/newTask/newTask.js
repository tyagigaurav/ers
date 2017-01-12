ersApp.config(function($stateProvider) {
    $stateProvider
        .state('newTask', {
            url: '/newTask',
            templateUrl: 'app/components/newTask/newTask.html',
            controller: 'newTaskCtrl'

        });
});