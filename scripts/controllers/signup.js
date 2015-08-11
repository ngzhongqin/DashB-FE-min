'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the pssdashApp
 */

app.controller('SignUpCtrl', function ($scope, $http, $cookies) {

	$scope.submitPost = function () {
    console.log("SignUpCtrl submitPost");
          var data = {
              'email' : $scope.signup.email,
              'password' : $scope.signup.password,
          };

          var req = {
           method: 'POST',
           url: 'http://localhost:8080/signup',
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


console.log("SignUpCtrl submitPost req email:"+req.data.data.email);
console.log("SignUpCtrl submitPost req password:"+req.data.data.password);


          $http(req).success(function (data, status, headers, config) {
                $scope.code = data.data.code;
                console.log("SignUpCtrl success: code: "+data.data.code); 
                $scope.message = data.data.message;
                console.log("SignUpCtrl success: message: "+data.data.message); 
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