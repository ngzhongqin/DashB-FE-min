'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:SslCtrl
 * @description
 * # SslCtrl
 * Controller of the pssdashApp
 */

app.controller('SslCtrl', function ($scope, $http) {

    var data = {
        'field1' : $scope.ssls,
    };

    var url = backendHostname+'/ssls';

    var req = {
     method: 'POST',
     url: url,
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.ssls = data.data; 
          console.log("data.data"+ data.data);
          console.log("$scope.ssls: "+ $scope.ssls);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });

});