AngularShop.factory('Product', [
  '$resource', function($resource) {
    return $resource('products/:productId.json', {}, {
      'update': { method:'PUT' }
    });
  }
]);
