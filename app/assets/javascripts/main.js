AngularShop = angular.module('AngularShop', [
  'ngRoute',
  'ngResource'
]);

AngularShop.config([
  '$routeProvider', function($routeProvider) {
    $routeProvider.when('/products', {
      templateUrl: './assets/templates/products/index.html',
      controller: 'ProductsIndexCtrl'
    });
    $routeProvider.when('/products/:productId', {
      templateUrl: './assets/templates/products/show.html',
      controller: 'ProductsShowCtrl'
    });
    return $routeProvider.otherwise({
      templateUrl: './assets/templates/products/index.html',
      controller: 'ProductsIndexCtrl'
    });
  }
]);
