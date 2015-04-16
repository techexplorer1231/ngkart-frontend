(function() {
    'use strict';

    angular
        .module('workspace')
        .controller('ProductCtrl', ProductCtrl);

    ProductCtrl.$inject = [];

    /* @ngInject */
    function ProductCtrl(){
        var vm = this;


        activate();

        ////////////////

        function activate() {
        }
    }
})();
