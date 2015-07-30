'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TaskViewCtrl
 * @description
 * # TaskViewCtrl
 * Controller of the pssdashApp
 */

app.controller('TaskViewCtrl', function ($scope, $http, $location, $routeParams) {

  console.log("$routeParams.param1: "+$routeParams.param1);
  var url = 'http://localhost:8080/tasks?action=View'+'&'+'task='+$routeParams.param1;

    var data = {
        'field1' : 'dummy'
    };

    var req = {
     method: 'GET',
     url: url,
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.task = data.data; 
          console.log("data.data"+ data.data);
          console.log("$scope.task: "+ $scope.task);
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
              'remarks': $scope.task.remarks
          };

          var req_url = 'http://localhost:8080/tasks?action=Update'+'&'+'task='+$routeParams.param1;
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


          $http(req).success(function (data, status, headers, config) {
                console.log("TaskViewCtrl submitPost success");
                $location.path('/tasks');
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});