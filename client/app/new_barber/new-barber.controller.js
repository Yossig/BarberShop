/**
 * Created by Yossi on 22-Jan-16.
 */
'use strict'

angular.module('myNewProejctApp')
  .controller('newBarberCtrl', function ($scope, $http, socket, $uibModalInstance) {
    $scope.barber = {}
    $scope.barber.abilities = [];
    $scope.barber.status = 'Inactive'
    $scope.barberStatus = ['Active', 'Inactive'];

    $scope.createBarber = function () {
      $http.post('/api/barbers/', $scope.barber).success(function(){
        $scope.close();
      });
    };

    $scope.removeAbility = function (index) {
      $scope.barber.abilities.splice(index, 1);
    }

    $scope.addAbility = function () {
      $scope.barber.abilities.push($scope.newAbility);
      $scope.newAbility = '';
    }

    $scope.close = function() {
      $uibModalInstance.dismiss('close');
    }
  });
