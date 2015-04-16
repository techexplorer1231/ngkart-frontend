(function () {
  'use strict';

  angular
    .module('workspace')
    .directive('ecSlider', ecSlider);

  ecSlider.$inject = [];

  /* @ngInject */
  function ecSlider() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: SliderCtrl,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      templateUrl: 'app/components/ecSlider/ecSlider.html',
      scope: {}
    };
    return directive;

    function link(scope, element, attrs, controller) {

    }
  }


  SliderCtrl.$inject = [];

  /* @ngInject */
  function SliderCtrl() {
    var vm = this;
    vm.myInterval = 500;
    vm.slides = [
      {
        image: 'http://placehold.it/1200X300/ff8b03/000000',
        text: '1'
      },
      {
        image: 'http://placehold.it/1200X300/ff8b03/000000',
        text: '2'
      }
    ];
  }
})();
