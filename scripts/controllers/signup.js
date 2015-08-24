'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the pssdashApp
 */

app.controller('SignUpCtrl', function ($scope, $rootScope, $http, $cookies, $location) {

	$scope.submitPost = function () {
    console.log("SignUpCtrl submitPost");
          var data = {
              'lanId' : $scope.signup.lanId,
              'password' : $scope.signup.password,
              'full_name' : $scope.signup.full_name
          };

        
        var req_url = backendHostname+'/signup?action=SignUp';
        
          var req = {
           method: 'POST',        
           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          };


        console.log("SignUpCtrl submitPost req lanId:"+req.data.data.lanId);
        console.log("SignUpCtrl submitPost req full_name:"+req.data.data.full_name);
        console.log("SignUpCtrl submitPost req password:"+req.data.data.password);


          $http(req).success(function (data, status, headers, config) {
                $scope.code = data.data.code;
                console.log("SignUpCtrl success: code: "+data.data.code); 
                $scope.message = data.data.message;
                console.log("SignUpCtrl success: message: "+data.data.message); 
                if(data!=null){
                  if(data.data!=null){
                      $rootScope.code = data.data.code;
                      $rootScope.message = data.data.message;
                      
                    if(data.data.pasdash_session!=null){
                      $rootScope.pasdash_session = data.data.pasdash_session;
                      $cookies.put('pasdash_session', data.data.pasdash_session);
                      console.log("SignUpCtrl success: pasdash_session: "+data.data.pasdash_session); 
                      $location.path('/');
                    }
                  }
                }
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});