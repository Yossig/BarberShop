'use strict';

angular.module('myNewProejctApp')
  .controller('NavbarCtrl', function ($scope, $location) {
    $scope.menu = [
      {
        'title': 'Home',
        'link': '/'
      }, {
        'title': 'Manage Barbers',
        'link': '/Manage'
      }, {
        'title': 'Schedule',
        'link': '/Schedule'
      }
    ];

    $scope.isCollapsed = true;

    $scope.isActive = function (route) {
      return route === $location.path();
    };
  });
