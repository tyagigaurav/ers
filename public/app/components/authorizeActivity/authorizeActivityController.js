ersApp.controller('authorizeActivityCtrl', function($scope, $state, activityService, ngNotify) {

    $scope.toggleAll = function(manager) {

         var toggleStatus = manager.isAllSelected;
          _.each($scope.managers, function(manager)
          {
            _.each(manager.activities, function(activity){

                activity.selected = toggleStatus;
            })
                
          });
     }

    $scope.loadData = function(){

            activityService.getActivitiestoAuthorize().then(function(data) {
            $scope.managers = data;
            _.each($scope.managers, function(manager)
            {
                manager.isAllSelected = false;
            });
            
        });
    }   

    $scope.actionOnActivity = function(activity, action){

        var data = [{
            activity_id: activity.id,
            action: action
        }];

        activityService.actionOnActivity(data).then(function(data) {
            if(action == 'cancel')
                ngNotify.set(data.message, 'error');
            else
                ngNotify.set(data.message, 'success');
            $scope.loadData();
        });
    }

    $scope.actionOnActivities = function(manager){

        var data = _.map(_.filter(manager.activities, function(activity) {
                            return activity.selected == true;
                        }), function(activity) {
                            return {
                                "id": activity.id,
                                "action": 'authorize'
                            }
                    });

        if(data.length == 0) {

            ngNotify.set("Please select atleast one checkbox", 'warn');

        }
        else{

            activityService.actionOnActivity(data).then(function(data) {
                ngNotify.set(data.message, 'success');
                $scope.loadData();
            });

        }
    }

    $scope.loadData();
});