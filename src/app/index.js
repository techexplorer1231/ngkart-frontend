(function() {
  'use strict';

  angular
    .module('workspace', [
            'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap'
        ])
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      });
    $urlRouterProvider.otherwise('/');
  }
})();
