angular.module('settingsModule')
  .controller('settingsController', ['$scope', '$state', 'inThisTerm', function($scope, $state, itt) {
    /* This is the settings controller - handles the left hand panel
     * it will be used to display the course list and relevant
     * course information
     * */
    $scope.courseList = itt.getCourses();
    $scope.selectCourse = function(index) {
      console.log(index);
      $state.go('stats-view');
      itt.selectCourse(index); 

    };
  }]);
