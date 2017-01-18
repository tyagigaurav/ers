ersApp.controller('newTaskCtrl', function($scope, tasksService, membersService) {

    $scope.activeTask = null;
    $scope.activeMember = [];

    $scope.buttonDisabled = function()
    {
        return(($scope.activeTask && $scope.activeMember) == undefined);
    }

    tasksService.getAllTasks().then(function(data) {
        $scope.tasks = data;
    });

    $scope.assignTask = function(){

        tasksService.assignTask($scope.activeTask, $scope.activeMember);
    };

    membersService.getAllMembers().then(function(data) {
        $scope.members = data;
    });

    $scope.selectedTask = function(task) {
        
        task.active = !task.active;
        //$scope.activeTask = value;
        $scope.buttonDisabled();
    };
    $scope.selectedMember = function(value) {
        $scope.activeMember = value;
        $scope.buttonDisabled();
    };
});