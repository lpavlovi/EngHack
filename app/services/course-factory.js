'use strict';
angular.module('servicesModule')
  .factory('courseFactory', ['durationFactory', function(df) {
    return function Course(name, code, studySchedule) {
      this.name = name;
      this.code = code;
      this.studySchedule;
      this.timeSpentThisWeek = moment.duration();
      this.timeSpentToday = moment.duration();
      // if a variable is passed to the schedule
      if(!!studySchedule) {
        this.studySchedule = studySchedule;
        this.timeSpentThisWeek = countTime(moment().startOf('week'), moment().endOf('week'), this.studySchedule);
        this.timeSpentToday = countTime(moment().startOf('day'), moment().endOf('day'), this.studySchedule);
      }
      // get time spent working on a course for this week
      function countTime(start, finish, schedule) {
        var duration = moment.duration();
        for(var i = 0; i < schedule.length; i++) {
          if(schedule[i].start.isBetween(start, finish)) {
            duration.add(schedule[i].duration);
          }
        }
        return duration;
      }
    };
  }]);
