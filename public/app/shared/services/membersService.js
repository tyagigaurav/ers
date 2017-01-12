ersApp.service('membersService', ['$http', '$q', function($http, $q) {

    var defer = $q.defer();

    this.getAllMembers = function() {

        $http.get('https://jsonplaceholder.typicode.com/users').then(function(response) {
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    }
}]);