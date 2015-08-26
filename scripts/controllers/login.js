'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pssdashApp
 */

app.controller('LoginCtrl', function ($scope, $rootScope, $http, $cookies, $location, UserService, UserService2) {
//    UserService.getCurrentUser('login');
    
    
	$scope.submitPost = function () {
    console.log("LoginCtrl submitPost");
          var data = {
              'lanId' : $scope.login.lanId,
              'password' : $scope.login.password,
          };

          var req_url = backendHostname+'/login?action=Login';

          var req = {
           method: 'POST',
           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


console.log("LoginCtrl submitPost req lanId:"+req.data.data.lanId);
console.log("LoginCtrl submitPost req password:"+req.data.data.password);


          $http(req).success(function (data, status, headers, config) {
              
                $rootScope.code = data.data.returnStatus.code;
                $rootScope.message = data.data.returnStatus.message;
              
                if(data!=null){
                  if(data.data!=null){
                      
                    if(data.data.data.pssdash_session!=null){
                      $scope.winestory_session = data.data.data.pssdash_session;
                      $cookies.put('pssdash_session', data.data.data.pssdash_session);
                      console.log("LoginCtrl success: pssdash_session: "+data.data.data.pssdash_session);
                        if(data.data.data.user!=null){
                            console.log("LoginCtrl data.data.user: "+data.data.user.full_name);
                            $rootScope.user=data.data.data.user;   
                        }
                      console.log("LoginCtrl redirecting to /tasks");
                      $location.path('/tasks');
                    }
                  }
                }

            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});
