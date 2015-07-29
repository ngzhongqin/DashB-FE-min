'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the pssdashApp
 */

app.controller('TasksCtrl', function ($scope, $http) {

    var data = {
        'field1' : $scope.tasks,
    };

    var req = {
     method: 'POST',
     url: 'http://localhost:8080/tasks',
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.tasks = data.data; 
          console.log("data.data"+ data.data);
          console.log("$scope.tasks: "+ $scope.task);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });

});