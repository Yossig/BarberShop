/**
 * Created by Yossi on 08-Jan-16.
 */
'use strict';

angular.module('myNewProejctApp')
  .controller('ManageBarbersCtrl', function ($scope, $http, socket, $uibModal) {
    $scope.barbers = [];

    $http.get('/api/barbers').success(function (barbers) {
      $scope.barbers = barbers;
      socket.syncUpdates('barber', $scope.barbers);
    });

    $scope.addBarber = function () {
      if ($scope.newBarber === '') {
        return;
      }
      $http.post('/api/barbers', {name: $scope.newBarber});
      $scope.newBarber = '';
    };

    $scope.deleteBarber = function (barber) {
      $http.delete('/api/barbers/' + barber._id);
    };

    $scope.$on('$destroy', function () {
      socket.unsyncUpdates('barber');
    });

    $scope.openProfile = function(size,id) {
      $uibModal.open({
        animation: true,
        templateUrl: '/app/profile/profile.html',
        controller: 'profileCtrl',
        size: size,
        resolve: {
          barber: function($http) {
            return $http.get('api/barbers/'+ id);
          }
        }
      })
    }

    $scope.newBarber = function(size) {
      $uibModal.open({
        animation: true,
        templateUrl: '/app/new_barber/new-barber.html',
        controller: 'newBarberCtrl',
        size: size,
        resolve: {
        }
      })
    }

  });
