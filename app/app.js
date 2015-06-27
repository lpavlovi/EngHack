'use strict';
angular.module('rootModule', ['servicesModule'])
  .controller('rootController', ['$scope', 'courseFactory', 'durationFactory', function($scope, cf, df) {
    // __INIT__
    function init() {
      var newDuration = new df('2015-06-26 10:00','2015-06-26 10:20');
      var newDuration2 = new df('2015-06-27 10:00','2015-06-27 10:40');
      var newCourse = new cf('Signals and Systems', 'ECE 207', [newDuration, newDuration2]);
      /*
      $scope.a = 'Hello';
      $scope.b = newDuration.start.format("dddd, MMMM Do YYYY, h:mm:ss a");
      $scope.c = newDuration.finish.format("dddd, MMMM Do YYYY, h:mm:ss a");
      */
      $scope.a = newDuration.duration.asMinutes();
      $scope.b = newCourse.timeSpentThisWeek.asMinutes();
      $scope.c = newCourse.timeSpentToday.asMinutes();
    }
    init();

  }]);

