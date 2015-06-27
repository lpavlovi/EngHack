angular.module('settingsModule')
    .controller('statsController', ['$scope', 'inThisTerm', function($scope, itt) {
      $scope.course = itt.getSelectedCourse();
    }]);
