'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TaskViewCtrl
 * @description
 * # TaskViewCtrl
 * Controller of the pssdashApp
 */

app.controller('TaskViewCtrl', function ($scope, $http, $location, $routeParams, $cookies,$rootScope,UserService2,TaskService) {
    UserService2.user(function(data) {});
    
    TaskService.task($routeParams.param1, function(data){
        $scope.task = data.data; 
        $scope.task.datedue = new Date($scope.task.datedue);
    });
    
    $scope.submitPost = function(){
        console.log("$scope.task:"+$scope.task);
        TaskService.update_task($routeParams.param1,$scope.task,function(data){
            console.log('TaskViewCtrl - submitPost');
            $location.path('/tasks');
        });   
    };
    
});