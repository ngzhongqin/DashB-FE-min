'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:ChangePasswordCtrl
 * @description
 * # ChangePasswordCtrl
 * Controller of the pssdashApp
 */

app.controller('ChangePasswordCtrl', function ($scope, $rootScope, $http, $cookies, $location, UserService2,AlertBoxService) {
//    UserService.getCurrentUser('change_password');
        UserService2.user(function(data) {}); 
    
    var session_id = $cookies.get('pssdash_session');
    
	$scope.submitPost = function () {
    console.log("ChangePasswordCtrl submitPost");
          var data = {
              'old_password' : $scope.change_password.old_password,
              'new_password' : $scope.change_password.new_password
          };

          var req_url = backendHostname+'/login?action=ChangePassword'+'&'+'session_id='+session_id;

          var req = {
           method: 'POST',
           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }

        console.log("ChangePasswordCtrl submitPost req old_password:"+req.data.data.old_password);
        console.log("ChangePasswordCtrl submitPost req new_password:"+req.data.data.new_password);


          $http(req).success(function (data, status, headers, config) {
              $rootScope.code = data.data.returnStatus.code;
              $rootScope.message = data.data.returnStatus.message;
              
              AlertBoxService.open();
              AlertBoxService.close();

                if(data!=null){
                  if(data.data!=null){
                      $rootScope.code = data.data.returnStatus.code;
                      $rootScope.message = data.data.returnStatus.message;
                      
                  }
                }

            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});