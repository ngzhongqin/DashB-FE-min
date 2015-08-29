'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:MyPageCtrl
 * @description
 * # MyPageCtrl
 * Controller of the pssdashApp
 */

app.controller('MyPageCtrl', function ($scope, $rootScope, $http, $cookies, $location, UserService2,AlertBoxService, TaskService) {
    UserService2.user(function(data) {}); 
    TaskService.my_tasks(function(data){
        if(data!=null){
            if(data.data!=null){
                $scope.tasks = data.data;
            }else{
                console.log("MyPageCtrl - No object returned from server");
            }
        }else{
            console.log("MyPageCtrl - No object returned from server");
        }
    });
    
    
});