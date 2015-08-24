'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the winestoryApp
 */

app.controller('LogoutCtrl', function ($scope, $rootScope, $http, $cookies, $location) {
    var session_id = $cookies.get('pssdash_session');
    console.log("LogoutCtrl submitPost");
          var data = {
              'dummy' : "dummy"
          };
          var req_url = backendHostname+'/login?action=Logout'+'&'+'session_id='+session_id;
          var req = {
           method: 'POST',
           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }


      $http(req).success(function (data, status, headers, config) {
            $cookies.remove('pssdash_session');
            $scope.code = data.data.code;
            console.log("LogoutCtrl success: code: "+data.data.code); 
            $scope.message = data.data.message;
            console.log("LogoutCtrl success: message: "+data.data.message); 
            if(data!=null){
              if(data.data!=null){
                  $rootScope.code = data.data.code;
                  $rootScope.message = data.data.message;
                  $location.path('/tasks');
              }
            }

        }).error(function (data, status, headers, config) {
            $scope.status = status + ' ' + headers;
        });
});