'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pssdashApp
 */

app.controller('LoginCtrl', function ($scope, $rootScope, $http, $cookies, $location) {

	$scope.submitPost = function () {
    console.log("LoginCtrl submitPost");
          var data = {
              'email' : $scope.login.email,
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


console.log("LoginCtrl submitPost req email:"+req.data.data.email);
console.log("LoginCtrl submitPost req password:"+req.data.data.password);


          $http(req).success(function (data, status, headers, config) {
                $scope.code = data.data.code;
                console.log("LoginCtrl success: code: "+data.data.code); 
                $scope.message = data.data.message;
                console.log("LoginCtrl success: message: "+data.data.message); 
                if(data!=null){
                  if(data.data!=null){
                      $rootScope.code = data.data.code;
                      $rootScope.message = data.data.message;
                      
                    if(data.data.pssdash_session!=null){
                      $scope.winestory_session = data.data.pssdash_session;
                      $cookies.put('pssdash_session', data.data.pssdash_session);
                      console.log("LoginCtrl success: pssdash_session: "+data.data.pssdash_session); 
                      $location.path('/tasks');
                    }
                  }
                }

            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});