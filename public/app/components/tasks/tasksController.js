ersApp.controller('tasksCtrl', function($scope, $state, tasksService) {

	$scope.state = $state;

    tasksService.getAllTasks().then(function(data) {
        $scope.tasks = data;
    });

    $scope.imgSrc = function(status){

        path = '/assets/img/' + status.toLowerCase() + ".png";

        return path;

    };
});