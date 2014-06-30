AngularShop.controller('ProductsShowCtrl', [
  '$scope', '$location', '$routeParams', 'Product', function($scope, $location, $routeParams, Product) {
    $scope.product = Product.get({productId: $routeParams.productId});
  }
]);
