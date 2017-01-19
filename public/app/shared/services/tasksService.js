ersApp.service('tasksService', ['$http', '$q', function($http, $q) {

    var defer = $q.defer();

    this.getAllTasks = function() {

        $http.get('app/mockData/tasks.json').then(function(response) {
        	_.each(response.data, function(task) {
        		task.date = moment(task.date, "MM-DD-YYYY");
        	});
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    }

    this.assignTask = function(tasks, members){
        
        var defer = $q.defer();
        var data={};
        data.tasks = tasks;
        data.members = members;

        $http.post('/assignTask', data).then(function(response) {
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    };

    this.getAssigneeTasksByAssignor = function() {

        var defer = $q.defer();

        $http.get('app/mockData/getassigneebyassignor.json').then(function(response) {
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;

    };

}]);