ersApp.controller('teamMemberCtrl', function($scope, $state, membersService) {
    
    $scope.state = $state;

	membersService.getUser().then(function(data) {
		$scope.user = data;
		$scope.tasks = $scope.user.tasks;
	}); 

	$scope.imgSrc = function(status){

		path = 'assets/img/' + status.toLowerCase() + ".png";

		return path;

	};
    
});