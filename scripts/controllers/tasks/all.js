'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the pssdashApp
 */

app.controller('TasksCtrl', function ($scope, $http,$cookies,$location,$rootScope,UserService2) {
    
    UserService2.user(function(data) {}); 
    
    var session_id = $cookies.get('pssdash_session');
    var data = {
        'field1' : $scope.tasks,
    };

    var req_url = backendHostname+'/tasks?action=GetTasks'+'&'+'session_id='+session_id;

    var req = {
     method: 'POST',
     url: req_url,
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.tasks = data.data.data; 
          $rootScope.code = data.data.returnStatus.code;
          $rootScope.message = data.data.returnStatus.message;
          if("SEC-104" == data.data.returnStatus.code){
            $location.path("/login")   
          }
          
          console.log("data.data.data"+ data.data.data);
          console.log("$scope.tasks: "+ $scope.task);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });

});
