'use strict';
angular.module('servicesModule')
  .service('inThisTerm', [function() {
    var masterArray = [];
    this.getCourses = function() {
      return masterArray;
    };
    this.setCourses = function(x) {
      masterArray = x;
    };
    this.addCourse = function(x) {
      masterArray.push(x);
    };
    this.removeCourse = function(index) {
      // removes a single course from the masterArray
      masterArray.splice(index, 1);
    };
  }]);
