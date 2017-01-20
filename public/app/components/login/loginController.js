ersApp.controller('loginCtrl', function($scope, $stateParams, $state, loginService, ngNotify) {

  if(loginService.isLoggedIn()){
    $state.go("root");
  }

  $scope.formSubmit = function() {

    loginService.login($scope.credentials).then(function(data) {

      if(data.role) {

        $scope.error = '';
        $scope.credentials.username = '';
        $scope.credentials.password = '';
        ngNotify.set(data.message, 'success');
        $state.go("root");

      } else {
          ngNotify.set(data.message, 'error');
      }  
    });

  };

});

