ersApp.controller('newTaskCtrl', function($scope, tasksService, membersService) {

    $scope.activeTaskId = null;
    $scope.activeMemberIds = [];

    $scope.activateTask = function(taskId)
    {
        $scope.activeTaskId = taskId;
    }

    $scope.activateMembers = function(memberId){

        var index = $scope.activeMemberIds.indexOf(memberId);

        if(index < 0)
            $scope.activeMemberIds.push(memberId);
        else
            $scope.activeMemberIds.splice(index, 1);
    }

    $scope.buttonDisabled = function()
    {
        return(($scope.activeTaskId == null || $scope.activeMemberIds.length == 0));
    }

    tasksService.getAllTasks().then(function(data) {
        $scope.tasks = data;
    });

    membersService.getAllMembers().then(function(data) {
        $scope.members = data;
    });

});