angular.module('settingsModule')
  .controller('settingsController', ['$scope', function($scope) {
    /* This is the settings controller - handles the left hand panel
     * it will be used to display the course list and relevant
     * course information
     * */
    $scope.courseList;
  }]);
