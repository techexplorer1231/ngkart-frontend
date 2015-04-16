(function () {
    'use strict';

    angular
        .module('workspace')
        .directive('ecHeaderNav', ecHeaderNav);

    ecHeaderNav.$inject = [];

    /* @ngInject */
    function  ecHeaderNav() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: HeaderNavCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'app/components/ecHeaderNav/ecHeaderNav.html',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {

        }
    }

    HeaderNavCtrl.$inject = [];

    /* @ngInject */
    function HeaderNavCtrl() {
    }
})();
