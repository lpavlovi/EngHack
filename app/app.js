'use strict';
angular.module('rootModule', ['servicesModule', 'calendarModule', 'settingsModule', 'ui.router'])
  .controller('rootController', ['$scope', 'inThisTerm', 'courseFactory', 'durationFactory', function($scope, itt, Course, Duration) {
    // __INIT__
    function init() {
      document.getElementById('bwrapper').style.height = window.innerHeight-document.getElementById('hwrapper').offsetHeight+'px';
    }

    // initializes the view
    init();
  }])
  .config(function($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('main', {
        url: '/',
        templateUrl: 'settings/stats/stats-view.html',
        controller: 'settingsController'
      });
    $urlRouterProvider.otherwise('/');
  });

