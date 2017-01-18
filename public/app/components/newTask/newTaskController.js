ersApp.controller('newTaskCtrl', function($scope, tasksService, membersService) {

    $scope.activeTask;
    $scope.activeMember;

    $scope.buttonDisabled = function()
    {
        return(($scope.activeTask && $scope.activeMember) == undefined);
    }

    tasksService.getAllTasks().then(function(data) {
        $scope.tasks = data;
    });

    $scope.assignTask = function(){

        tasksService.assignTask($scope.activeTask, $scope.activeMember);
    };

    membersService.getAllMembers().then(function(data) {
        $scope.members = data;
    });

    $scope.selectedTask = function(value) {
        $scope.activeTask = value;
        $scope.buttonDisabled();
    };
    $scope.selectedMember = function(value) {
        $scope.activeMember = value;
        $scope.buttonDisabled();
    };
});