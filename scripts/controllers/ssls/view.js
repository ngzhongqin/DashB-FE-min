'use strict';

/**
 * @ngdoc function
 * @name pssdashApp.controller:SslViewCtrl
 * @description
 * # SslViewCtrl
 * Controller of the pssdashApp
 */

app.controller('SslViewCtrl', function ($scope, $http, $location,$routeParams) {

  console.log("SslViewCtrl ");

    console.log("SslViewCtrl $routeParams.param1: "+$routeParams.param1);
  var url = backendHostname+'/ssls?action=View'+'&'+'ssl='+$routeParams.param1;

    var data = {
        'field1' : 'dummy'
    };

    var req = {
     method: 'GET',
     url: url,
     headers: {
       'Content-Type': "text/plain"
     },
     data:{data: data}
    }

      $http(req).success(function (data, status, headers, config) {
          $scope.ssl = data.data; 
         $scope.ssl.datedue = new Date($scope.ssl.datedue);
          $scope.ssl.start_date = new Date($scope.ssl.start_date);
           $scope.ssl.end_date = new Date($scope.ssl.end_date);


          console.log("data.data"+ data.data);
          console.log("$scope.ssl: "+ $scope.ssl);
      }).error(function (data, status, headers, config) {
          $scope.status = status + ' ' + headers;
      });



	$scope.submitPost = function () {
    console.log("SslViewCtrl submitPost");
    console.log("SslViewCtrl submitPost poStatus:"+$scope.ssl.poStatus);
          var data = {
              'id' : $scope.ssl.id,
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

          var req_url = backendHostname+'/ssls?action=Update'+'&'+'ssl='+$routeParams.param1;
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