'use strict';

/**
 * @ngdoc function
 * @name winestoryApp.controller:LogoutCtrl
 * @description
 * # LogoutCtrl
 * Controller of the winestoryApp
 */

app.controller('LogoutCtrl', function ($scope, $rootScope, $http, $cookies, $location,AlertBoxService) {
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
            $rootScope.user = null;      
            $rootScope.code = data.data.returnStatus.code;
            $rootScope.message = data.data.returnStatus.message;

            AlertBoxService.open();          
            AlertBoxService.close();
          
            if(data!=null){
              if(data.data!=null){
                  $location.path('/login');
              }
            }

        }).error(function (data, status, headers, config) {
            $scope.status = status + ' ' + headers;
        });
});