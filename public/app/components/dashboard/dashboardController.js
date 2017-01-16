ersApp.controller('dashboardCtrl', function($scope, $state, tasksService, membersService) {

	$state.go("dashboard.tasks");

	$scope.state = $state;

	$scope.role = 'manager';

	$scope.isActive = function(role){

		return role == $scope.role;
	}

});