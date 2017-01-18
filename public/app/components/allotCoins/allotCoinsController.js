ersApp.controller('allotCoinsCtrl', function($scope, $state, tasksService, membersService) {

    membersService.getAllMembers().then(function(data) {
        $scope.managers = data;
    });


});