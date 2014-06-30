AngularShop.controller('ProductsShowCtrl', [
  '$scope', '$location', '$routeParams', 'Product', 'ProductData', function($scope, $location, $routeParams, Product, ProductData) {
    $scope.product = Product.get({productId: $routeParams.productId});

    $scope.deleteProduct = function(){
      Product.delete({productId: $scope.product.id}, function(){
        ProductData.setLoaded(false);
        $location.url('/products');
      }, function(){
        console.error("ERROR deleting Product");
      });
    }
  }
]);
