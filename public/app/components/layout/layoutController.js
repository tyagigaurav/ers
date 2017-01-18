ersApp.controller('layoutCtrl', function($scope, $state, tasksService, membersService) {

	$scope.state = $state;

    $scope.value = 500;

    $scope.name = "Gaurav";

	$scope.role = localStorage.getItem("role");
    
    if($scope.role == "manager"){
        
        $state.go("root.tasks");
        
    }else if($scope.role == "admin"){
       
        $state.go("root.admin");
        
    }else if($scope.role == "user"){
       
        $state.go("root.user");
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