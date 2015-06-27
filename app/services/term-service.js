'use strict';
angular.module('servicesModule')
  .service('inThisTerm', [function() {
    var masterArray = [];
    var selectedCourse;
    var timeSlotsAndStuff = [];
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
    this.addTime = function(x) {
      timeSlotsAndStuff.push(x);
      $('#calendar').fullCalendar('removeEvents');
      $('#calendar').fullCalendar('addEventSource', timeSlotsAndStuff );	
    };
    this.selectCourse = function(i) {
      selectedCourse = i;
    };
    this.getSelectedCourse = function() {
      return masterArray[selectedCourse];
    };
  }]);
