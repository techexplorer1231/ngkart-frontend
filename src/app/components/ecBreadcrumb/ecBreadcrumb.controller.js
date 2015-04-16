(function () {
    'use strict';

    angular
        .module('workspace')
        .directive('ecBreadcrumb', ecBreadcrumb);

    ecBreadcrumb.$inject = [];

    /* @ngInject */
    function  ecBreadcrumb() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: BreadcrumbCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'app/components/ecBreadcrumb/ecBreadcrumb.html',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {

        }
    }

    BreadcrumbCtrl.$inject = [];

    /* @ngInject */
    function BreadcrumbCtrl() {
    }
})();
