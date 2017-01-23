ersApp.controller('teamCtrl', function($scope, $state, membersService) {

	$scope.assignorId = $scope.$parent.userId;

	$scope.loadData = function(){

        membersService.getAllMembers($scope.assignorId).then(function(data) {
        $scope.members = data;
   		})

    };

    $scope.loadData();
    
});