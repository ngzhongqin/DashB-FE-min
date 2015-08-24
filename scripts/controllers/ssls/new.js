'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:SslNewCtrl
 * @description
 * # SslNewCtrl
 * Controller of the pssdashApp
 */

app.controller('SslNewCtrl', function ($scope, $http, $location,$routeParams,UserService,$cookies) {
    UserService.getCurrentUser('ssls-new');
    var session_id = $cookies.get('pssdash_session');
    
  $scope.submitPost = function () {
    console.log("SslNewCtrl submitPost");
    console.log("SslNewCtrl submitPost poStatus:"+$scope.ssl.poStatus);
          var data = {
              'po' : $scope.ssl.po,
              'poStatus' : $scope.ssl.poStatus,
              'country' : $scope.ssl.country,
              'environment' : $scope.ssl.environment,
              'application' : $scope.ssl.application,
              'server': $scope.ssl.server,
              'organization': $scope.ssl.organization,

              'organizational_unit' : $scope.ssl.organizational_unit,
              'common_name' : $scope.ssl.common_name,
              'start_date' : $scope.ssl.start_date,
              'end_date': $scope.ssl.end_date,
              'datedue': $scope.ssl.datedue,

              'key_strength' : $scope.ssl.key_strength,
              'cert_type' : $scope.ssl.cert_type,
              'team_involved' : $scope.ssl.team_involved,
              'owner': $scope.ssl.owner
          };

          var req_url = backendHostname+'/ssls?action=New'+'&'+'session_id='+session_id;;
          var req = {
           method: 'POST',

           url: req_url,
           headers: {
             'Content-Type':  "text/plain"
           },
           data:{data: data}
          }

          $http(req).success(function (data, status, headers, config) {
                console.log("SslNewCtrl submitPost success");
                $location.path('/ssls');
            }).error(function (data, status, headers, config) {
                $scope.status = status + ' ' + headers;
            });

  };
});