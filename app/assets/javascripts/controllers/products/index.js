AngularShop.controller('ProductsIndexCtrl', [
  '$scope', '$http', '$location', 'ProductData', function($scope, $http, $location, ProductData) {
    $scope.title = "Products";

    $scope.data = ProductData.data;
    ProductData.loadProducts();

    $scope.orderOptions = [
      { name: "title"},
      { name: "price"}
    ];

    $scope.ordering = $scope.orderOptions[0];

    $scope.viewProduct = function(id) {
      return $location.url('/products/' + id);
    };

    $scope.newProduct = function(id) {
      return $location.url('/products/new');
    };

  }
]);
