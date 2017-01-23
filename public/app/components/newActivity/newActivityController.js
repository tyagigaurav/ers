ersApp.controller('newActivityCtrl', function($rootScope, $scope, activityService, membersService, ngNotify) {

    $scope.assignorId = $scope.$parent.userId;
    $scope.activeActivityId = null;
    $scope.activeMemberIds = [];
    $scope.description = "";

    $scope.loadData = function(){

        activityService.getActivitiesOfAssignor($scope.assignorId).then(function(data) {
            $scope.activities = data;
        });

        membersService.getAssigneesOfAssignor($scope.assignorId).then(function(data) {
            $scope.members = data;
        });

    }

    $scope.activateActivity = function(activityId) {
        $scope.activeActivityId = activityId;
    }

    $scope.activateMembers = function(memberId) {

        var index = $scope.activeMemberIds.indexOf(memberId);

        if (index < 0)
            $scope.activeMemberIds.push(memberId);
        else
            $scope.activeMemberIds.splice(index, 1);
    }

    $scope.isDisabled = function() {
        return (($scope.activeActivityId == null || $scope.activeMemberIds.length == 0));
    }

    $scope.assignActivity = function() {

        var data = {
            activity_id: $scope.activeActivityId,
            assignee_id: $scope.assignorId,
            assignedTo_id: _.map($scope.activeMemberIds, function(id) {
                return {
                    "id": id
                }
            }),
            activity_description: $scope.description,
            token: localStorage.getItem("token")
        };

        if($scope.description != ""){

            activityService.assignActivity(data).then(function(data) {
                ngNotify.set(data.message, 'success');
                $scope.activeActivityId = null;
                $scope.activeMemberIds = [];
                $scope.description = "";
            });
        }
        else{

            ngNotify.set("Activity Description can't be empty", 'warn');
        }

    };

    $scope.loadData();

});