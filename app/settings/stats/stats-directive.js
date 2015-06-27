angular.module('settingsModule')
  .directive('courseStats', function() {
    return {
      retrict: 'EA',
      templateUrl: 'settings/stats/stats-view.html',
      link: function() {
        /*console.log('hello - from the courseStats directive');*/ 
      }
    };
  });
