'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:LoginCtrl
 * @description
 * # LoginCtrl
 * Controller of the pssdashApp
 */

app.controller('LoginCtrl', function ($scope, $http, $cookies) {

	$scope.submitPost = function () {
    console.log("LoginCtrl submitPost");
          var data = {
              'email' : $scope.login.email,
              'password' : $scope.login.password,
          };

          var req = {
           method: 'POST',
           url: 'http://localhost:8080/login',
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
                    if(data.data.dashb_session!=null){
                      $scope.dashb_session = data.data.dashb_session;
                      $cookies.put('dashb_session', data.data.dashb_session);
                      console.log("LoginCtrl success: dashb_session: "+data.data.dashb_session); 
                    }
                  }
                }

            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});