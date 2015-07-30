'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TaskNewCtrl
 * @description
 * # TaskNewCtrl
 * Controller of the pssdashApp
 */

app.controller('TasksNewCtrl', function ($scope, $http, $location,$routeParams) {

	$scope.submitPost = function () {
    console.log("TasksNewCtrl submitPost");
          var data = {
              'defect' : $scope.task.defect,
              'incident' : $scope.task.incident,
              'owner' : $scope.task.owner,
              'description' : $scope.task.description,
              'status' : $scope.task.status,
              'remarks' : $scope.task.remarks
          };

          var req_url = 'http://localhost:8080/tasks?action=New';
          var req = {
           method: 'POST',
           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


console.log("TaskNewCtrl submitPost req defect:"+req.data.data.defect);
console.log("TaskNewCtrl submitPost req incident:"+req.data.data.incident);
console.log("TaskNewCtrl submitPost req owner:"+req.data.data.owner);
console.log("TaskNewCtrl submitPost req description:"+req.data.data.description);
console.log("TaskNewCtrl submitPost req description:"+req.data.data.remarks);


          $http(req).success(function (data, status, headers, config) {
                console.log("TaskNewCtrl submitPost success");
                $location.path('/tasks');
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});