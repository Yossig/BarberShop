/**
 * Created by Yossi on 08-Jan-16.
 */
'use strict';

angular.module('myNewProejctApp')
  .controller('ManageBarbersCtrl', function ($scope, $http, socket) {
    $scope.barbers = [];

    $http.get('/api/barbers').success(function(barbers) {
      $scope.barbers = barbers;
      socket.syncUpdates('barber', $scope.barbers);
    });

    $scope.addBarber = function() {
      if($scope.newBarber === '') {
        return;
      }
      $http.post('/api/barbers', { name: $scope.newBarber });
      $scope.newBarber = '';
    };

    $scope.deleteBarber = function(barber) {
      $http.delete('/api/barber/' + barber._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('barber');
    });
  });
