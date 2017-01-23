ersApp.controller('teamMemberCtrl', function($scope, $state, $stateParams, activityService) {
    
    $scope.state = $state;

	$scope.loadActivities = function(){

		$scope.member = $stateParams.obj;

		if($scope.member)
		{

		activityService.getActivitiesByAssignee($scope.member.id).then(function(data) {

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
	}

	$scope.imgSrc = function(status){

		path = 'assets/img/' + status.toLowerCase() + ".png";

		return path;

	};

	$scope.loadActivities();
    
});