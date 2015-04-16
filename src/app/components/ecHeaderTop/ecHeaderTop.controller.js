(function () {
    'use strict';

    angular
        .module('workspace')
        .directive('ecHeaderTop', ecHeaderTop);

    ecHeaderTop.$inject = [];

    /* @ngInject */
    function  ecHeaderTop() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: HeaderTopCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'app/components/ecHeaderTop/ecHeaderTop.html',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {

        }
    }

    HeaderTopCtrl.$inject = [];

    /* @ngInject */
    function HeaderTopCtrl() {
    }
})();
