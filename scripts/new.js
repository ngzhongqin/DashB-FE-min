'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TaskNewCtrl
 * @description
 * # TaskNewCtrl
 * Controller of the pssdashApp
 */

app.controller('TasksNewCtrl', function ($scope, $http, $location) {

	$scope.submitPost = function () {
    console.log("TasksNewCtrl submitPost");
          var data = {
              'defect' : $scope.task.defect,
              'incident' : $scope.task.incident,
              'owner' : $scope.task.owner,
              'description' : $scope.task.description,
              'status' : $scope.task.status
          };

          var req = {
           method: 'POST',
           url: 'http://localhost:8080/tasks/new',
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


console.log("TaskNewCtrl submitPost req defect:"+req.data.data.defect);
console.log("TaskNewCtrl submitPost req incident:"+req.data.data.incident);
console.log("TaskNewCtrl submitPost req owner:"+req.data.data.owner);
console.log("TaskNewCtrl submitPost req description:"+req.data.data.description);


          $http(req).success(function (data, status, headers, config) {
                console.log("TaskNewCtrl submitPost success");
                $location.path('/tasks');
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});