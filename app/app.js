'use strict';
angular.module('rootModule', ['servicesModule', 'calendarModule', 'settingsModule', 'ui.router'])
  .controller('rootController', ['$scope', 'inThisTerm', 'courseFactory', 'durationFactory', function($scope, itt, Course, Duration) {
    // __INIT__
    function init() {
      document.getElementById('bwrapper').style.height = window.innerHeight-document.getElementById('hwrapper').offsetHeight+'px';
      itt.setCourses([
        new Course('Signals and Systems', 'ECE 207', '#3498db'),
        new Course('Operating Systems', 'ECE 254', '#9b59b6'),
        new Course('Circuits', 'ECE 242', '#f1c40f')
      ]);

    }

    // initializes the view
    init();
  }])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'settings/list/list-view.html',
        controller: 'settingsController'
      })
      .state('stats-view', {
        url: '/stats',
        templateUrl: 'settings/stats/stats-view.html',
        controller: 'statsController'
      });
    $urlRouterProvider.otherwise('/');
  });

