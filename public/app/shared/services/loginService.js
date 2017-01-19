ersApp.service('loginService', ['$http', '$q', function($http, $q) {
    
    this.login = function(credentials){
        
        var defer = $q.defer();
        var data={};
        data.username = credentials.username;
        data.password = credentials.password;

		$http.post('/authenticate', data).then(function(response) {
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
    
    
    