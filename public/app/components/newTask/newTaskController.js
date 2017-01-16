ersApp.controller('newTaskCtrl', function($scope, tasksService, membersService) {

    $scope.activeTask;
    $scope.activeMember;

    tasksService.getAllTasks().then(function(data) {
        $scope.tasks = data;
    });

    membersService.getAllMembers().then(function(data) {
        $scope.members = data;
    });

    $scope.selectedTask = function(value) {
        $scope.activeTask = value;
    };
    $scope.selectedMember = function(value) {
        $scope.activeMember = value;
    };
});