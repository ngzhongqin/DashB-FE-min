'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TaskViewCtrl
 * @description
 * # TaskViewCtrl
 * Controller of the pssdashApp
 */

app.controller('TaskViewCtrl', function ($scope, $http, $location, $routeParams, $cookies,$rootScope,UserService2) {
    UserService2.user(function(data) {});
    
  var session_id = $cookies.get('pssdash_session');
    $scope.code = null;
    $scope.message = null;
  console.log("$routeParams.param1: "+$routeParams.param1);
  var req_url = backendHostname+'/tasks?action=View'+'&'+'task='+$routeParams.param1+'&'+'session_id='+session_id;

//  var req_url = backendHostname+'/tasks?action=GetTasks'+'&'+'session_id='+session_id;

    var data = {
        'field1' : 'dummy'
    };

    var req = {
     method: 'GET',
     url: req_url,
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.task = data.data.data; 
         $scope.task.datedue = new Date($scope.task.datedue);
          $rootScope.code = data.data.returnStatus.code;
          $rootScope.message = data.data.returnStatus.message;
          
          console.log("data.data.data"+ data.data.data);
          console.log("$scope.task: "+ $scope.task);
          
          $rootScope.code = data.data.returnStatus.code;
          $rootScope.message = data.data.returnStatus.message;
          if("SEC-104" == data.data.returnStatus.code){
              console.log("taskView.js - SEC-104 - data.data.status.code:"+data.data.returnStatus.code);
            $location.path("/login")   
          }
          
          
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });

	$scope.submitPost = function () {
    console.log("TaskViewCtrl submitPost");
          var data = {
              'no'     : $scope.task.no,
              'defect' : $scope.task.defect,
              'incident' : $scope.task.incident,
              'owner' : $scope.task.owner,
              'description' : $scope.task.description,
              'status' : $scope.task.status,
              'remarks': $scope.task.remarks,
              'datedue': $scope.task.datedue
          };

          var req_url = backendHostname+'/tasks?action=Update'+'&'+'task='+$routeParams.param1+'&'+'session_id='+session_id;
          var req = {
           method: 'POST',

           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


console.log("TaskViewCtrl submitPost req defect:"+req.data.data.defect);
console.log("TaskViewCtrl submitPost req incident:"+req.data.data.incident);
console.log("TaskViewCtrl submitPost req owner:"+req.data.data.owner);
console.log("TaskViewCtrl submitPost req description:"+req.data.data.description);
console.log("TaskViewCtrl submitPost req remarks:"+req.data.data.remarks);
console.log("TaskViewCtrl submitPost req datedue:"+req.data.data.datedue);


          $http(req).success(function (data, status, headers, config) {
                console.log("TaskViewCtrl submitPost success");
                $location.path('/tasks');
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});