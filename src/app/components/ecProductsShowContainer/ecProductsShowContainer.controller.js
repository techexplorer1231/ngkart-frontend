(function () {
  'use strict';

  angular
    .module('workspace')
    .directive('ecProductsShowContainer', ecProductsShowContainer);

  ecProductsShowContainer.$inject = [];

  /* @ngInject */
  function ecProductsShowContainer() {
    // Usage:
    //
    // Creates:
    //
    var directive = {
      bindToController: true,
      controller: ProductsShowContainerCtrl,
      controllerAs: 'vm',
      link: link,
      restrict: 'E',
      templateUrl: 'app/components/ecProductsShowContainer/ecProductsShowContainer.html',
      scope: {
        heading: '@',
        count: '@'
      }
    };
    return directive;

    function link(scope, element, attrs, controller) {

    }
  }

  ProductsShowContainerCtrl.$inject = ['dataservice', 'logger'];

  /* @ngInject */
  function ProductsShowContainerCtrl(dataservice, logger) {
    var vm = this;
    vm.products = [];

    activate();

    function activate() {
      return getProducts().then(function () {
        logger.info('Fetching Products');
      });
    }

    function getProducts() {
      return dataservice.getProducts()
        .then(function (data) {
          vm.products = data;
          return vm.products;
        });
    }
  }
})();
