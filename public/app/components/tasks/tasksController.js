ersApp.controller('tasksCtrl', function($scope, $state, tasksService) {

	$scope.state = $state;
	$scope.tasks = [];

    tasksService.getAssigneeTasksByAssignor().then(function(data) {

        $scope.allData = data;

            _.each($scope.allData, function(assignor)
    	{
    		_.each(assignor.members, function(member)
    		{
   				_.each(member.tasks, function(task)
   				{
    				$scope.tasks.push(task);
    			});
    		});
    	});
            
    });

    $scope.imgSrc = function(status){

        path = '/assets/img/' + status.toLowerCase() + ".png";

        return path;

    };
});