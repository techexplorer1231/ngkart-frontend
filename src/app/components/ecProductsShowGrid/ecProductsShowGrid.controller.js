(function () {
    'use strict';

    angular
        .module('workspace')
        .directive('ecProductsShowGrid', ecProductsShowGrid);

    ecProductsShowGrid.$inject = [];

    /* @ngInject */
    function  ecProductsShowGrid() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: ProductsShowGridCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'app/components/ecProductsShowGrid/ecProductsShowGrid.html',
            scope: {
              product: '=data'
            }
        };
        return directive;

        function link(scope, element, attrs, controller) {

        }
    }

    ProductsShowGridCtrl.$inject = [];

    /* @ngInject */
    function ProductsShowGridCtrl() {

    }
})();
