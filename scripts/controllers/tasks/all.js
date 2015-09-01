'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:TasksCtrl
 * @description
 * # TasksCtrl
 * Controller of the pssdashApp
 */

app.controller('TasksCtrl', function ($scope, $http,$cookies,$location,$rootScope,UserService2, TaskService) {
    
    UserService2.user(function(data) {}); 
    TaskService.all_tasks(function(data){
        $scope.tasks = data.data; 
    });
    
});
