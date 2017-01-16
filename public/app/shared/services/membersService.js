ersApp.service('membersService', ['$http', '$q', function($http, $q) {

	this.getAllMembers = function() {

		var defer = $q.defer();

		$http.get('app/mockData/members.json').then(function(response) {
			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;
	};

	this.getUser = function() {

		var defer = $q.defer();

		$http.get('app/mockData/userTask.json').then(function(response) {
			_.each(response.data.tasks, function(task) {
				task.date = moment(task.date, "MM-DD-YYYY");
			});
			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;

	};

}]);