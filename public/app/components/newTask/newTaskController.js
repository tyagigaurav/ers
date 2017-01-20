ersApp.controller('newTaskCtrl', function($rootScope, $scope, tasksService, membersService, ngNotify) {

    $scope.activeTaskId = null;
    $scope.activeMemberIds = [];

    $scope.activateTask = function(taskId) {
        $scope.activeTaskId = taskId;
    }

    $scope.activateMembers = function(memberId) {

        var index = $scope.activeMemberIds.indexOf(memberId);

        if (index < 0)
            $scope.activeMemberIds.push(memberId);
        else
            $scope.activeMemberIds.splice(index, 1);
    }

    $scope.isDisabled = function() {
        return (($scope.activeTaskId == null || $scope.activeMemberIds.length == 0));
    }

    tasksService.getActivitiesOfAssignor().then(function(data) {
        $scope.tasks = data;
    });

    membersService.getAssigneesOfAssignor().then(function(data) {
        $scope.members = data;
    });

    $scope.assignTask = function() {

        var data = {
            activity_id: $scope.activeTaskId,
            assignee_id: +localStorage.getItem("userId"),
            assignedTo_id: _.map($scope.activeMemberIds, function(id) {
                return {
                    "id": id
                }
            }),
            activity_description: $scope.description,
            token: localStorage.getItem("token")
        };

        tasksService.assignTask(data).then(function(data) {
            ngNotify.set(data.message, 'success');
            $scope.message = data;
        });
    };
});