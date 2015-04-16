(function () {
    'use strict';

    angular
        .module('workspace')
        .directive('ecHeaderCart', ecHeaderCart);

    ecHeaderCart.$inject = [];

    /* @ngInject */
    function  ecHeaderCart() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: HeaderCartCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'app/components/ecHeaderCart/ecHeaderCart.html',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {

        }
    }

    HeaderCartCtrl.$inject = [];

    /* @ngInject */
    function HeaderCartCtrl() {
    }
})();
