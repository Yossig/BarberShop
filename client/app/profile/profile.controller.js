/**
 * Created by Yossi on 22-Jan-16.
 */
'use strict'

angular.module('myNewProejctApp')
  .controller('profileCtrl', function ($scope, $http, socket, barber) {
    $scope.barber = barber.data;
    $scope.editMode = false;
    $scope.barberStatus = ['Active','Inactive'];

    $scope.editBarber = function () {
      $scope.newEdit = angular.copy($scope.barber);
      $scope.editMode = true;
    };

    $scope.cancelEdit = function () {
      $scope.barber = $scope.newEdit;
      $scope.editMode = false;
    };

    $scope.saveEdit = function () {
      $scope.editMode = false;
      $http.put('/api/barbers/' + $scope.barber._id, $scope.barber);
    };

    $scope.removeAbility = function (index) {
      $scope.barber.abilities.splice(index,1);
    }
  });
