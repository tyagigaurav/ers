ersApp.service('loginService', ['$http', '$q', function($http, $q) {
    
    this.login = function(credentials){
        
        var defer = $q.defer();

		$http.post('/authenticate', credentials).then(function(response) {
            
            if(response.data.role != null){
                localStorage.setItem("role", response.data.role);
                localStorage.setItem("token", response.data.token);
                localStorage.setItem("userId", response.data.userId);
                localStorage.setItem("value", response.data.value);
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
    
    
    