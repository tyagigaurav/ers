ersApp.controller('dashboardCtrl', function($scope, $state, tasksService, membersService) {

	$scope.state = $state;

	$scope.role = localStorage.getItem("role");
    
    if($scope.role == "manager"){
        
        $state.go("dashboard.tasks");
        
    }else if($scope.role == "admin"){
       
        $state.go("dashboard.admin");
        
    }else if($scope.role == "user"){
       
        $state.go("dashboard.user");
    }

	$scope.isActive = function(role){

		return role == $scope.role;
	}
    
    $scope.logout = function(){
        
        localStorage.removeItem("token");
        
        localStorage.removeItem("role");

        $state.go("login");

    }

});