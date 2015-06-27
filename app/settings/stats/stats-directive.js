angular.module('settingsModule')
  .directive('courseStats', function() {
    return {
      retrict: 'EA',
      templateUrl: 'settings/stats/stats-view.html',
      link: function(scope) {
        /*console.log('hello - from the courseStats directive');*/ 
        scope.course = itt.getSelectedCourse();
      }
    };
  });
