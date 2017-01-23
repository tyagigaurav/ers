ersApp.controller('allotCoinsCtrl', function($scope, $state, membersService, ngNotify) {

	$scope.toggleAll = function() {

	     var toggleStatus = $scope.isAllSelected;
	      _.each($scope.managers, function(manager)
	      {
	        	manager.selected = toggleStatus;
	      });
	 }

    $scope.loadData = function(){

	    	membersService.getAllManagers().then(function(data) {
	        $scope.managers = data;
	        _.each($scope.managers, function(manager)
	        {
	        	manager.allotedcoins = 0;
	        });
	    });

		$scope.allCoins = 0;
		$scope.isAllSelected = false;
    }

    $scope.allotCoins = function(manager){

    	var data = [{
            manager_id: manager.id,
            allotedcoins: +manager.allotedcoins
    	}];

    	if(manager.allotedcoins > 0) {
	        membersService.allotCoins(data).then(function(data) {
		        ngNotify.set(data.message, 'success');
		        $scope.loadData();
	        });
   	 	}
   	 	else
   	 	{
   	 		ngNotify.set("Enter valid N Coins", 'warn');
   	 	}
    }

    $scope.allotCoinsToAll = function(){

    	var data = _.map(_.filter($scope.managers, function(manager) {
						    return manager.selected == true;
						}), function(manager) {
						    return {
						        "id": manager.id,
						        "allotedcoins": +$scope.allCoins
						    }
					});

    	if(data.length == 0) {

    		ngNotify.set("Please select atleast one checkbox", 'warn');

    	}
    	else{

    		if($scope.allCoins > 0) {
	      		membersService.allotCoins(data).then(function(data) {
		        ngNotify.set(data.message, 'success');
		        $scope.loadData();
	        });
   	 	}
   	 	else
   	 	{
   	 		ngNotify.set("Enter valid N Coins", 'warn');
   	 	}

    	}
    }

    $scope.loadData();

});