ersApp.controller('newTaskCtrl', function($scope, tasksService, membersService) {

    $scope.activeTask;
    $scope.activeMember;

    tasksService.getAllTasks().then(function(data) {
        $scope.tasks = data.tasks;
    });

    membersService.getAllMembers().then(function(data) {
        $scope.members = [];
        for (i = 0; i < data.length; i++) {
            $scope.members.push(data[i].name);
        }
    });

    $scope.selectedTask = function(value) {
        $scope.activeTask = value;
    };
    $scope.selectedMember = function(value) {
        $scope.activeMember = value;
    };
});