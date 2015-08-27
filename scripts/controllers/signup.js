'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:SignUpCtrl
 * @description
 * # SignUpCtrl
 * Controller of the pssdashApp
 */

app.controller('SignUpCtrl', function ($scope, $rootScope, $http, $cookies, $location, AlertBoxService) {

    
    
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
              console.log("SignUpCtrl: data.data.returnStatus.code:"+data.data.returnStatus.code);
              console.log("SignUpCtrl: data.data.returnStatus.message:"+data.data.returnStatus.message);
              console.log("SignUpCtrl: data.data.data.pssdash_session:"+data.data.data.pssdash_session);
              $cookies.put('pssdash_session', data.data.data.pssdash_session);
            $rootScope.code = data.data.returnStatus.code;
            $rootScope.message = data.data.returnStatus.message;
              
              AlertBoxService.open();
              AlertBoxService.close();
              
                if(data!=null){
                  if(data.data!=null){
                      
                    if(data.data.data.pssdash_session!=null){
                      $rootScope.pssdash_session = data.data.data.pssdash_session;
                      $cookies.put('pssdash_session', data.data.data.pssdash_session);
                      console.log("SignUpCtrl success: pssdash_session: "+data.data.data.pssdash_session); 
                      $location.path('/');
                    }
                  }
                }
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

	};

});