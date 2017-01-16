ersApp.service('loginService', ['$http', '$q', function($http, $q) {
    
    this.login = function(username, password){
        
        var defer = $q.defer();
        var data={};
        data.username = username;
        data.password = password;

		$http.get('app/mockData/login.json', data).then(function(response) {
            if(response.data.role != null){
                localStorage.setItem("role", response.data.role);
                localStorage.setItem("token", response.data.token);   
                }

			return defer.resolve(response.data);
		}, function(response) {
			defer.reject(response);
		});

		return defer.promise;
	};
    
    this.isLoggedIn = function(){
    
        return localStorage.getItem("role");
        
    };

}]);
    
    
    