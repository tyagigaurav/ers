ersApp.service('tasksService', ['$http', '$q', function($http, $q) {

    var defer = $q.defer();

    this.getAllTasks = function() {

        $http.get('app/mockData/tasks.json').then(function(response) {
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    }
}]);