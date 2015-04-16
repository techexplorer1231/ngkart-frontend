(function () {
    'use strict';

    angular
        .module('workspace')
        .directive('ecHeaderSearch', ecHeaderSearch);

    ecHeaderSearch.$inject = [];

    /* @ngInject */
    function  ecHeaderSearch() {
        // Usage:
        //
        // Creates:
        //
        var directive = {
            bindToController: true,
            controller: HeaderSearchCtrl,
            controllerAs: 'vm',
            link: link,
            restrict: 'E',
            templateUrl: 'app/components/ecHeaderSearch/ecHeaderSearch.html',
            scope: {}
        };
        return directive;

        function link(scope, element, attrs, controller) {

        }
    }

    HeaderSearchCtrl.$inject = [];

    /* @ngInject */
    function HeaderSearchCtrl() {
    }
})();
