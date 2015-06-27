angular.module('settingsModule')
.directive('addTime', ['inThisTerm', function(itt) {
  return {
    restrict: 'EA',
templateUrl: 'settings/addtime/add-time.html',
link: function(scope) {
  scope.addSomething = function() {
    itt.addTime(
      {title:'EVENT ABC', start:moment().subtract(3, 'hours'), end:moment().subtract(2, 'hours')}
    );
  };
}
};
}]);
