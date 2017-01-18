ersApp.controller('teamCtrl', function($scope, $state, membersService) {

        membersService.getAllMembers().then(function(data) {
        $scope.members = data;
    });

    $scope.loadUser = function (userId) {
    	$state.go("root.teamMember", {'userId':userId});
    }
    
});