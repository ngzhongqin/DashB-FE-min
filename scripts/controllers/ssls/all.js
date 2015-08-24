'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:SslCtrl
 * @description
 * # SslCtrl
 * Controller of the pssdashApp
 */

app.controller('SslCtrl', function ($scope, $http,$cookies,UserService) {
    UserService.getCurrentUser('ssls');
    
    var session_id = $cookies.get('pssdash_session');
    var data = {
        'field1' : $scope.ssls,
    };
    
    var req_url = backendHostname+'/ssls?action=GetSSLs'+'&'+'session_id='+session_id;
//    var url = backendHostname+'/ssls';

    var req = {
     method: 'POST',
     url: req_url,
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.ssls = data.data; 
          console.log("data.data"+ data.data);
          console.log("$scope.ssls: "+ $scope.ssls);
          
          $scope.code = data.data.status.code;
          $scope.message = data.data.status.message;
          if("SEC-104" == data.data.status.code){
            $location.path("/login")   
          }
          
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });

});