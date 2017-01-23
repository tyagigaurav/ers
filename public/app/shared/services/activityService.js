ersApp.service('activityService', ['$http', '$q', function($http, $q) {

    var defer = $q.defer();

    // For Activites Screen
    this.getActivities = function(assignorId) {

        var defer = $q.defer();

        $http.get('app/mockData/activitiesToCheck.json').then(function(response) {
            _.each(response.data, function(activity) {
                activity.date = moment(activity.date, "MM-DD-YYYY");
            });
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    };
    
    // For newActivity Screen
    this.getActivitiesOfAssignor = function(assignorId) {

		var defer = $q.defer();

		$http.get('app/mockData/activitiesofAssignor.json', {params: {id: assignorId}}).then(function(response) {
			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;
	};

    // For newActivity Screen
    this.assignActivity = function(data){
        
        var defer = $q.defer();

        $http.post('/api/assignActivity', data).then(function(response) {
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    };

    // For user Screen
    this.getActivitiesByAssignee = function(userId) {

        var defer = $q.defer();

        $http.get('app/mockData/activitiesbyassignee.json', {params: {id: userId}}).then(function(response) {
            _.each(response.data, function(activity) {
                activity.date = moment(activity.date, "MM-DD-YYYY");
            });
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    };

    // For user Screen
    this.actionOnActivity = function(data) {

        var defer = $q.defer();

        $http.post('/api/performActivity', data).then(function(response) {
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    };

    // For admin Screen
    this.authorizeActivity = function(data) {

        var defer = $q.defer();

        $http.post('/api/authorizeActivity', data).then(function(response) {
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    };

    // For Admin Screen
    this.getActivitiestoAuthorize = function() {

        var defer = $q.defer();

        $http.get('app/mockData/authorizeActivity.json').then(function(response) {
            return defer.resolve(response.data);
        }, function(response) {
            defer.reject(response);
        });

        return defer.promise;
    };

}]);