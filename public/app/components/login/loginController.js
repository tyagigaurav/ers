ersApp.controller('loginCtrl', function($scope, $stateParams, $state, loginService) {

  if(loginService.isLoggedIn()){
    $state.go("root");
  }

  $scope.formSubmit = function() {

    loginService.login($scope.credentials).then(function(data) {

      if(data.role) {

        $scope.error = '';
        $scope.credentials.username = '';
        $scope.credentials.password = '';
        $state.go("root");

      } else {
        $scope.error = data.message;
      }  
    });

  };

});

