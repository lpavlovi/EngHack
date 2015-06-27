angular.module('settingsModule')
  .directive('addTime', function() {
    return {
      restrict: 'EA',
      templateUrl: 'settings/addtime/add-time.html',
      link: function() {
      }
    };
  });
