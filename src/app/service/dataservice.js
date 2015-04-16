(function () {
  'use strict';
  angular
    .module('workspace')
    .factory('dataservice', dataservice);

  dataservice.$inject = ['$http', 'logger', 'BACKEND_URL'];

  function dataservice($http, logger, BACKEND_URL) {
    return {
      getProducts: getProducts
    };

    function getProducts() {
      return $http.get('/api/products')
        .then(getProductsComplete)
        .catch(getProductsFailed);

      function getProductsComplete(response) {
        logger.success("Products fetched");
        return response.data;
      }

      function getProductsFailed(error) {
        logger.error('XHR Failed for getProducts.' + error.data);
      }
    }
  }
})();
