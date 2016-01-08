/**
 * Created by Yossi on 08-Jan-16.
 */
'use strict';

angular.module('myNewProejctApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('manage-barbers', {
        url: '/Manage',
        templateUrl: 'app/manage_barbers/manage-barbers.html',
        controller: 'ManageBarbersCtrl'
      });
  });
