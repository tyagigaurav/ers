ersApp.controller('loginCtrl', function($scope, $stateParams, $state, loginService) {
    
    $scope.formSubmit = function() {
    
        loginService.login($scope.username, $scope.password).then(function(data) {
         
        if(data.role) {
          
        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.go("dashboard");
      
      } else {
        $scope.error = data.message;
      }  
        });
        
       
    };
    
  });
  
  