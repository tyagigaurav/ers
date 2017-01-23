ersApp.controller('layoutCtrl', function($scope, $state, membersService, ngNotify) {

	$scope.state = $state;

    $scope.userId = +localStorage.getItem("userId");

	$scope.role = localStorage.getItem("role");

    membersService.getUserDetails($scope.userId).then(function(data) {

          $scope.name = data.name;
          $scope.value = data.value;
    });
    
    if($scope.role == "manager"){
        
        $state.go("root.activities");
        
    }else if($scope.role == "admin"){
       
        $state.go("root.authorizeActivity");
        
    }else if($scope.role == "user"){
       
        $state.go("root.user", {"userId":$scope.userId});
    }

	$scope.isActive = function(role){

		return role == $scope.role;
	}
    
    $scope.logout = function(){

        ngNotify.set("You have successfully logged out!", 'info');
        
        localStorage.removeItem("token");
        
        localStorage.removeItem("role");

        $state.go("login");

    }

});