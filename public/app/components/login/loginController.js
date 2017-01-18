ersApp.controller('loginCtrl', function($scope, $stateParams, $state, loginService) {

  if(loginService.isLoggedIn()){
    $state.go("root");
  }

  $scope.formSubmit = function() {

    loginService.login($scope.username, $scope.password).then(function(data) {

      if(data.role) {

        $scope.error = '';
        $scope.username = '';
        $scope.password = '';
        $state.go("root");

      } else {
        $scope.error = data.message;
      }  
    });

  };

});

