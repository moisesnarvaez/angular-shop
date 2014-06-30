AngularShop.controller('ProductCtrl', [
  '$scope', '$location', '$routeParams', 'Product', 'ProductData', function($scope, $location, $routeParams, Product, ProductData) {
    $scope.productId = $routeParams.productId;

    $scope.product = {};
    $scope.isNew = $routeParams.productId === undefined;

    if(!$scope.isNew){
      $scope.product = Product.get({productId: $scope.productId});
    }

    function successFeedback(){
      ProductData.setLoaded(false);
      $location.url('/products');
    }

    function errorFeedback(){
      console.error("ERROR saving product");
    }

    $scope.saveProduct = function(){
      var params = {
        title: $scope.product.title,
        description: $scope.product.description,
        price: $scope.product.price
      }
      if(!$scope.isNew){
        Product.update({ productId: $scope.product.id }, params, successFeedback, errorFeedback);
      }else{
        var newProduct = new Product(params);
        newProduct.$save().then(successFeedback, errorFeedback);
      }

    }
  }
]);
