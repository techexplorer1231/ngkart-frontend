(function () {
  'use strict';

  angular
    .module('workspace')
    .directive('ecBanner', ecBanner);

  ecBanner.$inject = [];

  /* @ngInject */
  function ecBanner() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: BannerCtrl,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      templateUrl: 'app/components/ecBanner/ecBanner.html',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs, controller) {

    }
  }


  BannerCtrl.$inject = [];

  /* @ngInject */
  function BannerCtrl() {

  }
})();
