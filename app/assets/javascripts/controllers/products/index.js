AngularShop.controller('ProductsIndexCtrl', [
  '$scope', '$http', '$location', 'Product', function($scope, $http, $location, Product) {
    $scope.title = "Products";

    $scope.products = Product.query();
    $scope.orderOptions = ["title", "price"];

    $scope.viewProduct = function(id) {
      return $location.url('/products/' + id);
    };

  }
]);
