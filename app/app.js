'use strict';
angular.module('rootModule', ['servicesModule'])
  .controller('rootController', ['$scope', 'inThisTerm', 'courseFactory', 'durationFactory', function($scope, itt, Course, Duration) {
    // __INIT__
    function init() {
      // added a new course in this term
      var newDuration = new Duration('2015-06-26 10:00','2015-06-26 10:20');
      var newDuration2 = new Duration('2015-06-27 10:00','2015-06-27 10:40');
      itt.addCourse(new Course('Signals and Systems', 'ECE 207', [newDuration, newDuration2]));
      itt.addCourse(new Course('Operating Systems', 'ECE 254', [newDuration, newDuration2]));
      /*
      $scope.a = 'Hello';
      $scope.b = newDuration.start.format("dddd, MMMM Do YYYY, h:mm:ss a");
      $scope.c = newDuration.finish.format("dddd, MMMM Do YYYY, h:mm:ss a");
      */
      $scope.courses = itt.getCourses();
      $scope.a = newDuration.duration.asMinutes();
      $scope.b = itt.getCourses()[0].timeSpentThisWeek.asMinutes();
      // $scope.c = newCourse.timeSpentToday.asMinutes();
    }
    init();

  }]);

