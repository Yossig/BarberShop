/**
 * Created by Yossi on 22-Jan-16.
 */
'use strict';

angular.module('myNewProejctApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('profile', {
        url: '/Manage/Profile/:barberId',
        templateUrl: 'app/profile/profile.html',
        controller: 'profileCtrl',
        resolve: {
          barber: function($http,$stateParams) {
            return $http.get('api/barbers/'+$stateParams.barberId);
          }
        }
      });
  });
