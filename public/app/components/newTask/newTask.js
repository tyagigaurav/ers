ersApp.config(function($stateProvider) {
    $stateProvider
        .state('dashboard.newTask', {
            url: '/newTask',
            templateUrl: 'app/components/newTask/newTask.html',
            controller: 'newTaskCtrl'

        });
});