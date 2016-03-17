/**
 * Created by Yossi on 12-Mar-16.
 */
angular.module('myNewProejctApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('schedule', {
        url: '/Schedule',
        templateUrl: 'app/schedule/schedule.html',
        controller: 'ScheduleCtrl'
      });
  });
