(function () {
  'use strict';

  angular
    .module('workspace', [
            'ngAnimate', 'ngCookies', 'ngTouch', 'ngSanitize', 'ngResource', 'ui.router', 'ui.bootstrap', 'toastr'
        ])
    .constant('_', window._)
    .constant('BACKEND_URL', 'https://soprano-finance-9000.codio.io')
    .config(configuration);

  configuration.$inject = ['$stateProvider', '$urlRouterProvider'];

  /* @ngInject */
  function configuration($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainCtrl'
      })
      .state('product', {
        url: '/product',
        templateUrl: 'app/product/product.html',
        controller: 'ProductCtrl'
      });
    $urlRouterProvider.otherwise('/');
  }
})();
