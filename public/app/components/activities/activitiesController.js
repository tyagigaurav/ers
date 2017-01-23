ersApp.controller('activitiesCtrl', function($scope, $state, activityService, ngNotify) {

	$scope.state = $state;
    $scope.userId = $scope.$parent.userId;

    $scope.loadData = function(){

        activityService.getActivities($scope.userId).then(function(data) {

        $scope.activities = data;
        });

    };    

    $scope.imgSrc = function(status){

        path = '/assets/img/' + status.toLowerCase() + ".png";

        return path;

    };

    $scope.actionOnActivity = function(activity, action){

        var data = [{
            activity_id: activity.id,
            action: action
        }];

        activityService.actionOnActivity(data).then(function(data) {
            ngNotify.set(data.message, 'success');
            $scope.loadData();
        });
    }

    $scope.loadData();

});