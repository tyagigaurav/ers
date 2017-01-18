ersApp.controller('userCtrl', function($scope, $state, membersService) {

	$scope.state = $state;

	membersService.getUser().then(function(data) {

		$scope.user = data;
		$scope.tasks = $scope.user.tasks;

		_.each($scope.tasks, function(task)
		{
			if(task.date < moment())
			{
				if(task.status == "Assigned")
				{
					task.status = "Expired";
				}
			}
		});
	}); 

	$scope.imgSrc = function(status){

		path = 'assets/img/' + status.toLowerCase() + ".png";

		return path;

	};
	
});