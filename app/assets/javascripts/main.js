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
    $routeProvider.when('/products/new', {
      templateUrl: './assets/templates/products/product.form.html',
      controller: 'ProductCtrl'
    });
    $routeProvider.when('/products/:productId/edit', {
      templateUrl: './assets/templates/products/product.form.html',
      controller: 'ProductCtrl'
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

AngularShop.config([
  "$httpProvider", function($httpProvider) {
    $httpProvider.defaults.headers.common['X-CSRF-Token'] = $('meta[name=csrf-token]').attr('content');
  }
]);
