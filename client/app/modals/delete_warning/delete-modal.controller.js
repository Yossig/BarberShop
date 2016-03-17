/**
 * Created by Yossi on 12-Mar-16.
 */
angular.module('myNewProejctApp')
.controller('deleteModalCtrl',function($scope,$uibModalInstance) {
    $scope.answerYes = function () {
      $uibModalInstance.close(true);
    }
    $scope.answerNo = function () {
      $uibModalInstance.close(false);
    }
  });
