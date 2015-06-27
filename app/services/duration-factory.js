'use strict';
angular.module('servicesModule')
  .factory('durationFactory', function() {
    return function(start, finish) {
      this.start = moment(start);
      this.finish = moment(finish);
      this.duration = moment.duration(this.finish - this.start);
    }
  });
