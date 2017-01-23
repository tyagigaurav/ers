ersApp.service('membersService', ['$http', '$q', function($http, $q) {

	//For Team Screen
	this.getAllMembers = function(assignorId) {

		var defer = $q.defer();

		$http.get('app/mockData/members.json',  {params: {id: assignorId}}).then(function(response) {
			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;
	};

	//For Admin Screen
	this.getAllManagers = function(assignorId) {

		var defer = $q.defer();

		$http.get('app/mockData/managers.json').then(function(response) {
			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;
	};

	//For Admin Screen
	this.allotCoins = function(data){

		var defer = $q.defer();

		$http.post('/api/allotCoins', data).then(function(response) {
			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;
	};

	//For Layout Template
	this.getUserDetails = function(userId) {

		var defer = $q.defer();

		$http.get('app/mockData/userDetails.json',  {params: {id: userId}}).then(function(response) {
			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;
	};
    
    // For newActivity Screen
    this.getAssigneesOfAssignor = function(assignorId) {

		var defer = $q.defer();

		$http.get('app/mockData/assigneesofAssignor.json', {params: {id: assignorId}}).then(function(response) {
			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;

	};

}]);