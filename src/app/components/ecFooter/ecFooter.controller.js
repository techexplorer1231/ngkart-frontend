(function () {
    'use strict';

    angular
        .module('workspace')
        .directive('ecFooter', ecFooter);

    ecFooter.$inject = [];

    /* @ngInject */
    function  ecFooter() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: FooterCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'app/components/ecFooter/ecFooter.html',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {

        }
    }

    FooterCtrl.$inject = [];

    /* @ngInject */
    function FooterCtrl() {
    }
})();
