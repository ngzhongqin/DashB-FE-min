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
                $rootScope.code = data.data.returnStatus.code;
                $rootScope.message = data.data.returnStatus.message;
                if(data!=null){
                  if(data.data!=null){
                      
                    if(data.data.data.pasdash_session!=null){
                      $rootScope.pasdash_session = data.data.data.pasdash_session;
                      $cookies.put('pasdash_session', data.data.data.pasdash_session);
                      console.log("SignUpCtrl success: pasdash_session: "+data.data.data.pasdash_session); 
                      $location.path('/');
                    }
                  }
                }
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});