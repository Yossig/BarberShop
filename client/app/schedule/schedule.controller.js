'use strict';

angular.module('myNewProejctApp')
  .controller('ScheduleCtrl', function ($scope, $compile, uiCalendarConfig) {
    $scope.events=[];
    
    $scope.uiConfig = {
      calendar:{
        height: 700,
        editable: true,
        header:{
          left: 'month agendaWeek agendaDay',
          center: 'title',
          right: 'today prev,next'
        },

      }
    };

    $scope.events.push({
      title: 'Open Sesame',
      start: new Date(),
      end: new Date(),
      className: ['openSesame']
    });

    $scope.eventSources = [$scope.events];
  });
