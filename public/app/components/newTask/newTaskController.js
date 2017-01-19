ersApp.controller('newTaskCtrl', function($scope, tasksService, membersService) {

    $scope.activeTasks = [];
    $scope.activeMembers = [];

    $scope.buttonDisabled = function()
    {
        return(($scope.activeTasks.length == 0 && $scope.activeMembers.length == 0));
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

    $scope.modifylist = function(e){
        $(e.target).hasClass('new-task')
    };
    
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