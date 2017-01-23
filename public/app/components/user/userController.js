ersApp.controller('userCtrl', function($scope, $state, activityService, ngNotify) {

	$scope.state = $state;
	$scope.userId = $scope.$parent.userId;

	$scope.loadActivities = function(){

	activityService.getActivitiesByAssignee($scope.userId).then(function(data) {

		$scope.activities = data;

		_.each($scope.activities, function(activity)
		{
			if(activity.date < moment())
			{
				if(activity.status == "Assigned")
				{
					activity.status = "Expired";
				}
			}
		});
	}); 

	}

	$scope.imgSrc = function(status){

		path = 'assets/img/' + status.toLowerCase() + ".png";

		return path;

	};

	$scope.actionOnActivity = function(activity, action){

		var data = [{
            activity_id: activity.id,
            action: action
        }];

        activityService.actionOnActivity(data).then(function(data) {
            ngNotify.set(data.message, 'success');
            $scope.loadActivities();
        });
    }

    $scope.loadActivities();
	
});